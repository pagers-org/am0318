import React, { useEffect, useRef, useState, useContext } from 'react';
import Layout from '../components/Layout';
import MainImage from '../assets/images/main-image.png';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '@project/stories/src/components/atom/Button';
import { BUTTON_THEME, SEND_URL, TIMEOUT, USER } from '../constants';
import Service from '../service';
import { getLocalStorage } from '../utils';
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from 'react-router-dom';
import NicknameContext from '../context/NicknameContext'
const localstorageNickname = getLocalStorage(USER.NICKNAME);

const Main = () => {
  const [nickname, setNickname] = useState(localstorageNickname || '');
  const { yourNickname, setYourNickname } = useContext(NicknameContext);
  const [linkShareTheme, setLinkShareTheme] = useState(BUTTON_THEME.DISABLED);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const copyUrlRef = useRef(null);
  const navigate = useNavigate();

  const service = Service();

  useEffect(() => {
    if (isSnackbarOpen) {
      setTimeout(() => {
        setIsSnackbarOpen(false);
      }, TIMEOUT.COMPLETE_COPY_CLIPBOARD);
    }
  }, [isSnackbarOpen]);

  useEffect(() => {
    nickname
      ? setLinkShareTheme(BUTTON_THEME.ACTION)
      : setLinkShareTheme(BUTTON_THEME.DISABLED);
  }, [nickname]);

  const onChangeName = (e) => {
    setNickname(e.target.value);
    setYourNickname(e.target.value);
  };

  const onClickLinkShare = async (e) => {
    if (!getLocalStorage(USER.NICKNAME)) {
      const data = await service.signup(nickname);
      copyUrlRef.current.value = `${SEND_URL}/${data.userId}`;
    }
    copyUrlRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setIsSnackbarOpen(true);
  };

  const onClickViewStorage = () => {
    navigate(`/main/${getLocalStorage(USER.USER_ID)}/storage`);
  }

  return (
    <Layout title='상장에 적힐 당신의 이름을 멋지게 적어주상!'>
      <Wrapper>
        <MainImg src={MainImage} alt='메인 이미지' />
        <Input
          type='text'
          placeholder='10자 이하의 멋진 이름'
          value={nickname}
          onChange={onChangeName}
        />
      </Wrapper>
      <ButtonWrapper>
        <Button
          theme={linkShareTheme}
          text='링크 공유'
          disabled={linkShareTheme === BUTTON_THEME.DISABLED}
          onClick={onClickLinkShare}
        ></Button>
        <ClipboardTextarea
          ref={copyUrlRef}
          value={`${SEND_URL}/${getLocalStorage(USER.USER_ID)}`}
          readOnly
        />
        <Button
          theme={BUTTON_THEME.DEFAULT}
          text='상장 콜렉션 보기'
          onClick={onClickViewStorage}
        />
      </ButtonWrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message='링크가 복사되었습니다!'
      />
    </Layout>
  );
};

export default Main;

const MainImg = styled.img`
  margin: 22px 0px 40px 0px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 70px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 100px;
`;

const ClipboardTextarea = styled.textarea`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
`;
