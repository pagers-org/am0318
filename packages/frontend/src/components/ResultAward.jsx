import React from 'react';
import styled from 'styled-components';
import { getImage, getTemplate } from '../utils/GetSvg';

function ResultAward({ awardParam }) {
  const today = new Date();
  const sender = '반가워!';
  const date = `${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일`;

  return (
    <Wrapper>
      <AwardWrapper backgroundImage={getTemplate(parseInt(awardParam.templateId))}>
        <AwardTitle>{awardParam?.title || ''}</AwardTitle>
        <AwardDetail>
          <DetailTop>
            <AwardLine>{awardParam.name}는(은)</AwardLine>
            <AwardLine>{awardParam?.description || ''}</AwardLine>
            <AwardLine>따라서 이 상장을 수여하겠상!</AwardLine>
          </DetailTop>
          <DetailBottom>
            <AwardLine>{date}</AwardLine>
            <AwardLine>{sender}</AwardLine>
          </DetailBottom>
        </AwardDetail>
        <StampImg src={getImage(parseInt(awardParam.stickerId))} />
      </AwardWrapper>
    </Wrapper>
  );
}

export default ResultAward;

const Wrapper = styled.main`
  margin: 30px 0px;
  display: flex;
  justify-content: center;
  width: 318px;
  height: 392px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AwardWrapper = styled.div`
  position: relative;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  width: 310px;
  height: 386px;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
  padding: 27px 40px;
`;
const AwardTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin: 0px 0px 0px 7px;
  height: 45px;
  font-weight: 900;
`;
const AwardDetail = styled.div`
  height: calc(100% - 45px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DetailTop = styled.div`
  word-break: break-all;
  word-wrap: normal;
`;
const DetailBottom = styled.div``;
const AwardLine = styled.p`
  margin: 20px 0px;
  font-weight: 900;
`;
const StampImg = styled.img`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 64px;
  height: 64px;
`;
