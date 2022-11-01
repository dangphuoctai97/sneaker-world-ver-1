import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Carousel, Badge, Button, Spin, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import ProductItem from "../../../components/ProductItem";
import { HOMEPAGE_PRODUCT_LIST_LIMIT } from "../../../constants/pagination";
import { ROUTES } from "../../../constants/routes";
import * as S from "./styles";

const UserHomePage = () => {
  const { productList } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: HOMEPAGE_PRODUCT_LIST_LIMIT,
        },
      })
    );
    dispatch(getCategoryListAction());
  }, []);

  const renderNewProductList = () => {
    return productList.data.map((item) => {
      return (
        item.isNew && (
          <Col span={6} key={item.id}>
            <Badge.Ribbon color="red" text="New">
              <ProductItem item={item} />
            </Badge.Ribbon>
          </Col>
        )
      );
    });
  };

  const renderBestSellerList = () => {
    return productList.data.map((item) => {
      return (
        item.discount >= 20 && (
          <Col span={6} key={item.id}>
            {item.isNew ? (
              <Badge.Ribbon color="red" text="New">
                <ProductItem item={item} />
              </Badge.Ribbon>
            ) : (
              <ProductItem item={item} />
            )}
          </Col>
        )
      );
    });
  };
  return (
    <Fragment>
      {productList.loading ? (
        <S.LoadingWrapper>
          <Spin size="large" />
        </S.LoadingWrapper>
      ) : (
        <S.Container>
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

          <S.ProductListContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Sản phẩm mới</span>
            </S.ContainerTiltle>
            <Row style={{ textAlign: "center" }}>
              <Col span={2}></Col>
              <Col span={20}>
                <Row gutter={[16, 16]}>{renderNewProductList()}</Row>
                <S.ShowMoreBtn
                  style={{ margin: "20px" }}
                  onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
                >
                  Hiện thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.ProductListContainer>
          <S.BestSellerContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Sản phẩm bán chạy</span>
            </S.ContainerTiltle>
            <Row style={{ textAlign: "center" }}>
              <Col span={2}></Col>
              <Col span={20}>
                <Row gutter={[16, 16]}>{renderBestSellerList()}</Row>
                <S.ShowMoreBtn
                  style={{ margin: "20px" }}
                  onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
                >
                  Hiện thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.BestSellerContainer>
          <S.BrandsContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Các thương hiệu</span>
            </S.ContainerTiltle>
            <S.CarouselBrands>
              <Row>
                <Col span={2}></Col>
                <Col span={20} style={{ width: "100%" }}></Col>
                <Col span={2}></Col>
              </Row>
            </S.CarouselBrands>
          </S.BrandsContainer>
          <S.CollectionContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Bộ sưu tập</span>
            </S.ContainerTiltle>
            <Row gutter={[8, 8]}>
              <Col span={8}>
                <div className="collection_content">
                  <img
                    src="https://runner-web.surge.sh/static/media/categorymen.17448f1d.jpeg"
                    alt=""
                  />
                  <div className="collection_title">
                    <h2>Giày nam</h2>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="collection_content">
                  <img
                    src="https://runner-web.surge.sh/static/media/categorywoman.ad01e00d.jpeg"
                    alt=""
                  />
                  <div className="collection_title">
                    <h2>Giày nữ</h2>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="collection_content">
                  <img
                    src="https://runner-web.surge.sh/static/media/categorykids.f0c887ee.jpg"
                    alt=""
                  />
                  <div className="collection_title">
                    <h2>Giày trẻ em</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </S.CollectionContainer>
          <S.RegisterContainer>
            <div className="register_content">
              <h2>Đăng ký</h2>
              <p>
                Đăng ký nhận bản tin của Sneaker World để cập nhật những sản
                phẩm mới, nhận thông tin ưu đãi đặc biệt và thông tin giảm giá
                khác.
              </p>
              <div className="register_form">
                <form>
                  <input
                    placeholder="Nhập email của bạn"
                    type="email"
                    required=""
                  />
                  <button type="submit">Gửi</button>
                </form>
              </div>
            </div>
          </S.RegisterContainer>
          <S.BlogContainer>
            <S.ContainerTiltle>
              <span className="title_underline">Bài Viết mới nhất</span>
            </S.ContainerTiltle>
            <Row style={{ textAlign: "center" }}>
              <Col span={2}></Col>
              <Col span={20}>
                <Row gutter={[16, 16]}></Row>
                <S.ShowMoreBtn
                  onClick={() => navigate(ROUTES.USER.PRODUCT_LIST)}
                >
                  Hiện thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.BlogContainer>
        </S.Container>
      )}
    </Fragment>
  );
};

export default UserHomePage;
