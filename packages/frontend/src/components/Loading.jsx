import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import wink from '../assets/images/wink.svg';
import smile from '../assets/images/smile.svg';
import cute from '../assets/images/cute.svg';
import Layout from '../components/Layout';

const ImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img``;

const TextWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  line-height: 1em;
`;

const Text = styled.p`
  font-size: 18px;
`;

function Loading({ isWriting, text }) {
  const [icon, setIcon] = useState(null);
  const images = [smile, wink, cute];

  useEffect(() => {
    let i = 0;
    const iconInterval = setInterval(() => {
      if (i === 3) i = 0;
      setIcon(images[i]);
      i++;
    }, 500);

    return () => clearInterval(iconInterval);
  }, []);

  return (
    <Layout>
      <ImageWrapper>
        <Image src={icon} />
      </ImageWrapper>
      <TextWrapper>
        <Text>{text}</Text>
        <Text>조금만 기다리상!</Text>
      </TextWrapper>
    </Layout>
  );
}

export default Loading;
