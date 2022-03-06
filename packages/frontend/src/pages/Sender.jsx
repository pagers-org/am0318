import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import MainImage from '../assets/images/main-image.png';
import Input from '../components/Input';
import NicknameContext from '../context/NicknameContext';
import Button from '@project/stories/src/components/atom/Button';
import { useNavigate } from 'react-router-dom';

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

function Sender() {
  const { yourNickname, setYourNickname } = useContext(NicknameContext);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigate = useNavigate();

  const onChangeName = (e) => {
    const { value } = e.target;
    setYourNickname(value);
    if (!value) {
      return setIsButtonActive(false);
    }
    return setIsButtonActive(true);
  };

  return (
    <Layout title='상장에 적힐 당신의 이름을 멋지게 적어주상!'>
      <Wrapper>
        <MainImg src={MainImage} alt='메인 이미지' />
        <Input
          type='text'
          placeholder='10자 이하의 멋진 이름'
          value={yourNickname}
          onChange={onChangeName}
        />
        <ButtonWrapper>
          <Button
            theme={isButtonActive ? 'action' : 'disabled'}
            text='상장 만들기'
            onClick={() => navigate('/decorate')}
          />
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  );
}

export default Sender;