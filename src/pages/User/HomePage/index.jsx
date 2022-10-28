import React, { Fragment } from "react";
import { Col, Row, Carousel, Select } from "antd";

import * as S from "./styles";

const UserHomePage = () => {
  return (
    <Fragment>
      <S.CarouselContainer>
        <Carousel
          autoplay
          dots={false}
          pauseOnHover={true}
          draggable
          effect="scrollx"
        >
          <div className="carouselContent">
            <img
              src="https://runner-web.surge.sh/static/media/slide2.094dfa5e.jpg"
              alt=""
            />
          </div>
          <div className="carouselContent">
            <img
              src="https://runner-web.surge.sh/static/media/slide3.d8ec659d.png"
              alt=""
            />
          </div>
          <div className="carouselContent">
            <img
              src="https://runner-web.surge.sh/static/media/slide4.fca25a5e.png"
              alt=""
            />
          </div>
        </Carousel>
      </S.CarouselContainer>
      <S.ProductContainer>
        <h2>New Product</h2>
        <Row style={{ textAlign: "center" }}>
          <Col span={4}>col-4</Col>
          <Col span={16}>
            col-16
            <Row gutter={[16, 16]}>
              <Col span={6}>1</Col>
              <Col span={6}>2</Col>
              <Col span={6}>3</Col>
              <Col span={6}>4</Col>
            </Row>
          </Col>
          <Col span={4}>col-4</Col>
        </Row>
      </S.ProductContainer>
      <S.CollectionContainer>
        <h2>bo suu tap</h2>
      </S.CollectionContainer>
      <S.BlogContainer></S.BlogContainer>
    </Fragment>
  );
};

export default UserHomePage;
