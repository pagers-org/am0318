import React, { useEffect, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '@project/stories/src/components/atom/Button';
import ResultAward from '../components/ResultAward';
import Service from '../service';
import { useNavigate } from 'react-router-dom';
import NicknameContext from '../context/NicknameContext';

const Complete = () => {
  const { yourNickname } = useContext(NicknameContext);
  const { state } = useLocation();
  const name = 'hello';
  const sender = 'hi';
  const service = Service();
  const navigate = useNavigate();
  const handleSaveAward = async state => {
    const data = await service.updateAward(state);

    console.log(data);
  };

  useEffect(() => {
    // todo userId로 nickname 가져오기
    const data = service.getUser();
  }, []);

  return (
    <Layout title={`${name}가 ${sender}에게 수여할 상장이 준비됐상!`}>
      <Wrapper>
        <ResultAward name={yourNickname} awardParam={state} />
        <ButtonWrapper>
          <Button theme="action" text="상장 수여하겠상!" onClick={() => handleSaveAward(state)} />
          <Button text="나도 받고 싶상!" onClick={() => navigate('/')} />
        </ButtonWrapper>
      </Wrapper>
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
