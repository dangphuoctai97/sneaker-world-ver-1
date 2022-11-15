import styled from "styled-components";

export const CustomerSlider = styled.div`
  height: 600px;
  width: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    .swiper-pagination-bullet {
      padding: 8px;
    }
    .swiper-pagination-bullet-active {
      background-color: royalblue;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const CustomerSliderHomePage = styled.div`
  margin: 20px auto;
  max-width: 1280px;
  padding: 0.5rem 0px;
  height: 700px;
  width: 100%;
  .swiper {
    width: 100%;
    height: 100%;
    .swiper-pagination-bullet-active {
      background-color: royalblue;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
