import React from 'react';
import styled from 'styled-components';
import oathImg from '../assets/images/oath.svg';

const Wrapper = styled.div`
  max-width: 1200px;
`;

const Title = styled.p`
  text-align: center;
`;
const Image = styled.img`
  margin-top: 52px;
  margin-bottom: 50px;
  width: 318px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.div`
  text-align: center;
`;

// 추후 wrapper, title, button 추후 공통 컴포넌트로 변경
export const Home = () => {
  return (
    <Wrapper>
      <Title>당신에게 주겠상</Title>
      <Image src={oathImg} />
      <Button>시작하기</Button>
    </Wrapper>
  );
};
export default Home;
