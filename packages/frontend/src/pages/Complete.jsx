import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '@project/stories/src/components/atom/Button';
import ResultAward from '../components/ResultAward';

const Complete = () => {
  const name = '테스트';
  const sender = '반가워!';
  return (
    <Layout title={`${name}가 ${sender}에게 수여할 상장이 준비됐상!`}>
      <Wrapper>
        <ResultAward />
        <ButtonWrapper>
          <Button theme="action" text="상장 수여하겠상!" />
          <Button text="나도 받고 싶상!" />
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
  margin: 0px 36px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
