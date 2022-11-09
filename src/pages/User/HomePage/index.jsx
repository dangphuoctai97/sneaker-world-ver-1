import React, { Fragment, useEffect, useState } from "react";
import { Col, Row, Carousel, Badge } from "antd";
import { useNavigate, Link, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";

import BrandSlider from "../../../components/BrandSlider";
import ProductItem from "../../../components/ProductItem";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { HOMEPAGE_PRODUCT_LIST_LIMIT } from "../../../constants/pagination";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const UserHomePage = () => {
  const { productList } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = TITLES.USER.HOME;
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: HOMEPAGE_PRODUCT_LIST_LIMIT,
          order: "id.desc",
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
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              <Badge.Ribbon color="red" text="New">
                <ProductItem item={item} />
              </Badge.Ribbon>
            </Link>
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
            <Link
              to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
                id: `${item.slug}.${item.id}`,
              })}
            >
              {item.isNew ? (
                <Badge.Ribbon color="red" text="New">
                  <ProductItem item={item} />
                </Badge.Ribbon>
              ) : (
                <ProductItem item={item} />
              )}
            </Link>
          </Col>
        )
      );
    });
  };

  return (
    <Fragment>
      {productList.loading ? (
        <LoadingWrapper />
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
                  Xem thêm
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
                  Xem thêm
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
                <Col span={20} style={{ width: "100%" }}>
                  <BrandSlider />
                </Col>
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
                    src="https://cf.shopee.vn/file/e21671f7f4520e3e9668278dec07aaad"
                    alt=""
                  />
                  <div className="collection_title">
                    <h2>Giày ngoại cỡ</h2>
                  </div>
                </div>
              </Col>
            </Row>
          </S.CollectionContainer>
          <S.RegisterContainer>
            <div className="register_content">
              <S.ContainerTiltle to={ROUTES.REGISTER}>
                <span className="title_underline white_text text_shadow">
                  Đăng ký ngay
                </span>
              </S.ContainerTiltle>
              <p>
                Để trở thành thành viên của gia đình Sneaker World để nhận được
                thông báo về những sản phẩm mới nhất và những ưu đãi đặc biệt.
              </p>
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
                <S.ShowMoreBtn onClick={() => navigate(ROUTES.USER.BLOG)}>
                  Xem thêm
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
