import React from 'react';
import styled from 'styled-components';
import oathImg from '../assets/images/oath.svg';
import Layout from '../components/Layout';
import Button from '@project/stories/src/components/atom/Button';
import { useNavigate } from 'react-router-dom';

const Image = styled.img`
  margin-top: 52px;
  margin-bottom: 20px;
  width: 318px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Home = () => {
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate('/main');
  };

  return (
    <Layout title={['당신에게 주겠상']}>
      <Image src={oathImg} />
      <Button onClick={onClickStart} text='시작하기' theme='action' />
    </Layout>
  );
};
export default Home;
