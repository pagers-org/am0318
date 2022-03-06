import React from 'react';
import styled from 'styled-components';
import { getImage, getTemplate } from '../utils/GetSvg';

function ResultAward(props) {
  const award = props.awardParam;
  const today = new Date();
  const name = '노아';
  const sender = '반가워!';
  const date = `${today.getFullYear()}년 ${today.getMonth()}월 ${today.getDate()}일`;

  return (
    <Wrapper>
      <AwardWrapper>
        <AwardTitle>{award.title}</AwardTitle>
        <AwardDetail>
          <DetailTop>
            <AwardLine>{name}는(은)</AwardLine>
            <AwardLine>{award.description}</AwardLine>
            <AwardLine>따라서 이 상장을 수여하겠상!</AwardLine>
          </DetailTop>
          <DetailBottom>
            <AwardLine>{date}</AwardLine>
            <AwardLine>{sender}</AwardLine>
          </DetailBottom>
        </AwardDetail>
        <StampImg src={getImage(parseInt(award.stickerId))} />
      </AwardWrapper>
    </Wrapper>
  );
}

export default ResultAward;

const Wrapper = styled.main`
  margin: 30px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
`;
const AwardWrapper = styled.div`
  position: relative;
  // background-image: url(${templateImg});
  border: 2px solid #000000;
  max-width: 330px;
  max-height: 410px;
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
