import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: inline-flex;
    justify-content: center;
  }

  .swiper-slide.swiper-slide-prev{
    margin-left: calc(100vw * 6% * -1);
    padding-right: calc(100vw * 6%);
  }
  .swiper-slide.swiper-slide-next{
    padding-left: calc(100vw * 6%);
  }

  @media only screen and (max-width: 425px) {
    .swiper-slide.swiper-slide-prev{
      margin-left: -130px;
      padding-right: 130px;
    }
    .swiper-slide.swiper-slide-next{
      padding-left: 130px;
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 550px) {
    .swiper-slide.swiper-slide-prev{
      margin-left: -90px;
      padding-right: 90px;
    }
    .swiper-slide.swiper-slide-next{
      padding-left: 90px;
    }
  }

  @media only screen and (min-width: 551px) and (max-width: 700px) {
    .swiper-slide.swiper-slide-prev{
      margin-left: -60px;
      padding-right: 60px;
    }
    .swiper-slide.swiper-slide-next{
      padding-left: 60px;
    }
  }
`;

const Carousel = ({ children }) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        className="mySwiper"
      >
        {(children || []).map((c, key) => (
          <SwiperSlide key={key}>{c}</SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
