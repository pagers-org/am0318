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
  const [selectedKey, setSelectedKey] = useState(null);
  const [awardParamList, setAwardParamList] = useState([
    { templateId: 0, stickerId: 1 },
    { templateId: 1, stickerId: 2 },
  ]);

  const navigate = useNavigate();
  const service = Service();

  useEffect(() => {
    setAwardParamList(service.getAwards());
  }, []);

  const showAwards = () => {
    if (awardParamList?.length > 0) {
      return (
        <CarouselWrapper>
          <Carousel>
            {awardParamList.map((x, key) => (
              <AwardWrapper key={key} onClick={() => onAwardClick(key)}>
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

  const onAwardClick = (key) => {
    setSelectedKey(key);
    console.log("click", key);
  };

  const onBackbuttonClick = () => {
    if (selectedKey === null) {
      navigate(-1);
    } else {
      setSelectedKey(null);
    }
  };

  return selectedKey === null ? (
    <Layout title="상장을 보며 자신감을 채우상!">
      <Wrapper>
        <StorageTitle>{nickname}의 컬렉션</StorageTitle>
        {showAwards()}
        <Button
          theme={BUTTON_THEME.DEFAULT}
          text="뒤로 가기"
          onClick={onBackbuttonClick}
        />
      </Wrapper>
    </Layout>
  ) : (
    <Layout>
      <Wrapper>
        <DetailWrapper>
          <div className="close-wrapper">
            <button className="close" onClick={onBackbuttonClick} />
          </div>
          <ResultAward awardParam={awardParamList[selectedKey]} />
        </DetailWrapper>
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

const DetailWrapper = styled.div`
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;

  div.close-wrapper {
    display: flex;
    justify-content: end;
    margin-bottom: 50px;
  }

  button.close {
    background-color: transparent;
    background-position: center;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    border: none;
    height: 28px;
    width: 28px;
  }
`;
