import React, { useEffect, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '@project/stories/src/components/atom/Button';
import ResultAward from '../components/ResultAward';
import Service from '../service';
import { useNavigate } from 'react-router-dom';
import { TIMEOUT } from '../constants';
import NicknameContext from '../context/NicknameContext';
import Snackbar from '@mui/material/Snackbar';

const Complete = () => {
  const { yourNickname } = useContext(NicknameContext);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [receiveName, setReceiveName] = useState('');
  const { state } = useLocation();
  const name = 'hello';
  const service = Service();
  const navigate = useNavigate();
  const handleSaveAward = async state => {
    await service.updateAward(state).then(() => setIsSnackbarOpen(true));
  };

  useEffect(() => {
    service.getUser().then(item => setReceiveName(item.nickname));
  }, []);

  useEffect(() => {
    if (isSnackbarOpen) {
      const snackBarTimeour = setTimeout(() => {
        setIsSnackbarOpen(false);
      }, TIMEOUT.COMPLETE_COPY_CLIPBOARD);
      () => clearTimeout(snackBarTimeour);
    }
  }, [isSnackbarOpen]);

  return (
    <Layout title={`${name}가 ${receiveName}에게 수여할 상장이 준비됐상!`}>
      <Wrapper>
        <ResultAward name={yourNickname} awardParam={state} receiveName={receiveName} />
        <ButtonWrapper>
          <Button theme="action" text="상장 수여하겠상!" onClick={() => handleSaveAward(state)} />
          <Button text="나도 받고 싶상!" onClick={() => navigate('/')} />
        </ButtonWrapper>
      </Wrapper>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message="수여했상!"
      />
    </Layout>
  );
};
export default Complete;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0px 25px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
