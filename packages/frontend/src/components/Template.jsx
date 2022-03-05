import React, { useState } from 'react';
import styled from 'styled-components';
import numberBox from '../assets/images/numberBox.svg';
import Layout from '../components/Layout';
import Button from '@project/stories/src/components/atom/Button';
import '../assets/css/font.css';
const Frame = styled.div`
  margin: 0 auto;
  width: 318px;
  height: 392px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 34px;
`;

const Image = styled.img`
  width: 310px;
  height: 386px;
`
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 50px;
  
`;

const BoxFrame = styled.div`
  width: 66px;
  height: 66px;
  margin-right: 16px;
  background-image: url(${numberBox});
  background-repeat: no-repeat;
  : last-child {
  margin-right: 0;
}
`;

const Box = styled.button`
  width: 54px;
  margin-left: 8px;
  margin-top: 3px;
  height: 54px;
  background-color: ${({ color, clicked }) => (clicked === color ? color : '#000')};
  margin-right: 16px;
  border: none;
  cursor: pointer;
  color: #fff;
  font-size: 24px;
  font-family:'UhBeeSe_hyun';
`;

const colors = ['#FF5F0F', '#FFF27B', '#82E8CF', '#79BBE5'];

export const Template = ({
  awardsImage,
  setTemplateSelectDone,
  setSelectedAwardImg,
  selectedAwardImg
}) => {

  const [colorClicked, setColorClicked] = useState(colors[0]);

  const changeTemplate = (color, index) => {
    setColorClicked(color);
    setSelectedAwardImg(awardsImage[index]);
  }

  return (
    <Layout
      title="어울리는 상장을 골라보상!">
      <Frame>
        <Image src={selectedAwardImg} />
      </Frame>
      <BoxWrapper>
        {
          colors.map((color, index) => (
            <BoxFrame>
              <Box
                onClick={() => changeTemplate(color, index)}
                clicked={colorClicked}
                key={color}
                color={color}
              >{index + 1}</Box>
            </BoxFrame>
          )
          )
        }
      </BoxWrapper>
      <Button
        onClick={() => setTemplateSelectDone(true)}
        text="다음"
        theme="action" />
    </Layout>
  );
};
