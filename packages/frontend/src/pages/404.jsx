import React from 'react';
import MainImage from '../assets/images/main-image.png';
import { useNavigate } from 'react-router-dom';
import Button from '@project/stories/src/components/atom/Button';
import styled from 'styled-components';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src={MainImage} alt="error" />
      <h2>페이지를 찾을 수 없상 ㅜㅜ</h2>
      <Button theme="action" text="돌아가기" onClick={() => navigate('/')}></Button>
    </Wrapper>
  );
};
export default ErrorPage;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    margin-bottom: 222px;
    font-family: 'UhBeeSe_hyun';
  }
`;
