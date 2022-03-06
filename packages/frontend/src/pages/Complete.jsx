import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '@project/stories/src/components/atom/Button';
import ResultAward from '../components/ResultAward';

const Complete = () => {
  const location = useLocation();
  const name = 'hello';
  const sender = 'hi';

  return (
    <Layout title={`${name}가 ${sender}에게 수여할 상장이 준비됐상!`}>
      <Wrapper>
        <ResultAward awardParam={location?.state} />
        <ButtonWrapper>
          <Button theme='action' text='상장 수여하겠상!' />
          <Button text='나도 받고 싶상!' />
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
