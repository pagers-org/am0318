import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import StorageTitle from "@project/stories/src/components/atom/StorageTitle";
import Button from "@project/stories/src/components/atom/Button";
import { BUTTON_THEME, SEND_URL, TIMEOUT, USER } from "../constants";
import { useNavigate } from "react-router-dom";
import ResultAward from "../components/ResultAward";
import CloseIcon from "../assets/icons/close.svg";
import EmptyImage from "../assets/images/award-empty.svg";

import Service from "../service";
import { getLocalStorage } from "../utils";
import Carousel from "../components/Carousel";

const localstorageNickname = getLocalStorage(USER.NICKNAME);

const Storage = () => {
  const [nickname, setNickname] = useState(localstorageNickname || "");
  const [selectedAward, setSelectedAward] = useState(null);
  const [awardParamList, setAwardParamList] = useState([
    { templateId: 0, stickerId: 1 },
  ]);

  const navigate = useNavigate();
  const service = Service();

  useEffect(() => {
    //setAwardParamList(service.getAwards());
  }, []);

  const showAwards = () => {
    if (awardParamList?.length > 0) {
      return (
        <CarouselWrapper>
          <Carousel>
            {awardParamList.map((x, key) => (
              <AwardWrapper key={key} onClick={onAwardClick}>
                <ResultAward awardParam={x} />
              </AwardWrapper>
            ))}
          </Carousel>
        </CarouselWrapper>
      );
    } else {
      console.log("Empty");
      return (
        <EmptyWrapper>
          <img src={EmptyImage} />
        </EmptyWrapper>
      );
    }
  };

  const onAwardClick = () => {
    // setSelectedAward(1);
  };

  const onBackbuttonClick = () => {
    if (selectedAward) {
      setSelectedAward(null);
    } else {
      navigate(-1);
    }
  };

  return (
    <Layout title="상장을 보며 자신감을 채우상!">
      <Wrapper>
        <StorageTitle>{nickname}의 컬렉션</StorageTitle>
        {selectedAward ? (
          <DetailWrapper>
            <CloseButton onClick={onBackbuttonClick}>
              <img src={CloseIcon} />
            </CloseButton>

            <ResultAward awardParam={{ stickerId: 0 }} />
          </DetailWrapper>
        ) : (
          showAwards()
        )}

        <Button
          theme={BUTTON_THEME.DEFAULT}
          text="뒤로 가기"
          onClick={onBackbuttonClick}
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

const EmptyWrapper = styled.div`
  max-width: 768px;
  height: 410px;
  margin-bottom: 120px;
  flex-direction: column;
  display: flex;
  justify-content: end;

  img {
    height: 95%;
  }
`;

const AwardWrapper = styled.div`
  max-width: 330px;
`;

const CloseButton = styled.button``;

const DetailWrapper = styled.div`
  display: flex;
`;
