import React from 'react';
import MainImage from '../assets/images/main-image.png';
import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import Button from '@project/stories/src/components/atom/Button';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Layout title={'페이지를 찾을 수 없습니다'}>
      <img src={MainImage} alt="error" />
      <Button theme="action" text="돌아가기" onClick={() => navigate('/')}></Button>
    </Layout>
  );
};
export default ErrorPage;
