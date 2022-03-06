import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import StorageTitle from "@project/stories/src/components/atom/StorageTitle";
import Button from "@project/stories/src/components/atom/Button";
import blue from "../assets/images/award_blue.svg";
import { BUTTON_THEME, SEND_URL, TIMEOUT, USER } from "../constants";
import { useNavigate } from "react-router-dom";
import ResultAward from '../components/ResultAward';

import Service from "../service";
import { getLocalStorage } from "../utils";
import Carousel from "../components/Carousel";

const localstorageNickname = getLocalStorage(USER.NICKNAME);

const Storage = () => {
  const [nickname, setNickname] = useState(localstorageNickname || "");

  const navigate = useNavigate();
  const service = Service();

  return (
    <Layout title="상장을 보며 자신감을 채우상!">
      <Wrapper>
        <StorageTitle>{nickname}의 컬렉션</StorageTitle>
        <CarouselWrapper>
          <Carousel>
            <AwardWrapper><ResultAward awardParam={{stickerId: 0}} /></AwardWrapper>
            <AwardWrapper><ResultAward awardParam={{stickerId: 1}} /></AwardWrapper>
            <AwardWrapper><ResultAward awardParam={{stickerId: 2}} /></AwardWrapper>
            <AwardWrapper><ResultAward awardParam={{stickerId: 3}} /></AwardWrapper>
          </Carousel>
        </CarouselWrapper>
        <Button
          theme={BUTTON_THEME.DEFAULT}
          text="뒤로 가기"
          onClick={() => navigate(-1)}
        />
      </Wrapper>
    </Layout>
  );
};

export default Storage;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CarouselWrapper = styled.div`
  max-width: 768px;
  max-height: 410px;
  margin-bottom: 120px;

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const AwardWrapper = styled.div`
  max-width: 330px;
`

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 70px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: flex-end;
  margin: 100px 0;
`;
