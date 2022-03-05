import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import cup from '../assets/images/cup.png';
import cloud from '../assets/images/cloud.png';
import bomb from '../assets/images/bomb.png';

const Wrapper = styled.div`

`;

const ImageWrapper = styled.div`
  width: 140px;
  height: 140px;
  margin: 0 auto;
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
`;
const TextWrapper = styled.div`
  margin-top: 40px;
  text-align: center;
  line-height: 1em;
`;

const Text = styled.p`
  font-size: 18px;
`;

function Loading() {
  const [icon, setIcon] = useState(null);
  const images = [cup, cloud, bomb];

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
    <Wrapper>
      <ImageWrapper>
        <Image src={icon} />
      </ImageWrapper>
      <TextWrapper>
        <Text>상장을 출력하고 있상!</Text>
        <Text>조금만 기다리상!</Text>
      </TextWrapper>
    </Wrapper>
  );
}

export default Loading;