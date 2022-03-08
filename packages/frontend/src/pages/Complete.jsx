import React, { useEffect, useContext, useState, useCallback } from 'react';
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
import BottomButtonWrapper from '../components/BottomButtonWrapper';
import Loading from '../components/Loading';

const Complete = () => {
  const [isCompleted, setComplete] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { nickname } = useContext(NicknameContext);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { state } = useLocation();
  const service = Service();
  const navigate = useNavigate();
  const handleSaveAward = useCallback(
    async state => {
      setComplete(false);
      setLoading(true);
      await service.updateAward(state).then(() => setIsSnackbarOpen(true));
      setLoading(false);
      setComplete(true);
    },
    [setLoading, setComplete],
  );

  useEffect(() => {
    if (isSnackbarOpen) {
      setTimeout(() => {
        setIsSnackbarOpen(false);
      }, TIMEOUT.COMPLETE_COPY_CLIPBOARD);
    }
    return () => clearTimeout();
  }, [isSnackbarOpen]);

  return (
    <>
      {isLoading ? (
        <Loading text="상장을 수여하고 있상!" />
      ) : (
        <Layout
          title={[`${nickname.sender}가 ${nickname.receiver}에게 수여할`, '상장이 준비됐상!']}
        >
          <Wrapper>
            <ResultAward
              sender={nickname.sender}
              awardParam={state}
              receiveName={nickname.receiver}
            />
            <BottomButtonWrapper marginTop={39}>
              {isCompleted ? (
                <Button text="나도 받고 싶상!" onClick={() => navigate('/')} />
              ) : (
                <Button
                  theme="action"
                  text="상장 수여하겠상!"
                  onClick={() => handleSaveAward(state)}
                />
              )}
            </BottomButtonWrapper>
          </Wrapper>
          <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={isSnackbarOpen}
            onClose={() => setIsSnackbarOpen(false)}
            message="수여했상!"
          />
        </Layout>
      )}
    </>
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
