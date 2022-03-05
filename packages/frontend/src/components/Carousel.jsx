import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import styled from "styled-components";

const Wrapper = styled.div`
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Carousel = ({ children }) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        className="mySwiper"
      >
        {children.map((c, key) => (
          <SwiperSlide key={key}>{c}</SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default Carousel;
