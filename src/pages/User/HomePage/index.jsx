import React, { Fragment, useEffect, useMemo } from "react";
import { Col, Row, Carousel, Badge } from "antd";
import { useNavigate, Link, generatePath, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getProductListAction,
  getCategoryListAction,
  getBlogListAction,
  getReviewListAction,
} from "../../../redux/actions";

import { CustomerSliderHomePage } from "../../../components/CustomerSlider";
import CustomerReviews from "../../../components/CustomerReviews";
import BrandSlider from "../../../components/BrandSlider";
import ProductItem from "../../../components/ProductItem";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { BlogItemHomePage } from "../../../components/BlogItem";
import {
  HOMEPAGE_PRODUCT_LIST_LIMIT,
  BLOG_LIST_LIMIT,
} from "../../../constants/pagination";

import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const UserHomePage = () => {
  const { productList } = useSelector((state) => state.product);
  const { blogList } = useSelector((state) => state.blog);
  const { reviewList } = useSelector((state) => state.review);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

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
    dispatch(
      getBlogListAction({
        params: {
          page: 1,
          limit: BLOG_LIST_LIMIT,
          order: "id.desc",
        },
      })
    );

    dispatch(getCategoryListAction());
    dispatch(getReviewListAction({ productId: id }));
  }, [id]);

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
  const renderBlogList = useMemo(() => {
    return blogList.data?.map((item) => {
      return (
        <Col span={8} key={item.id}>
          <Link
            to={generatePath(ROUTES.USER.BLOG_DETAILS, {
              id: `${item.slug}.${item.id}`,
            })}
            key={item.id}
            style={{ width: "100%" }}
          >
            <BlogItemHomePage item={item} />
          </Link>
        </Col>
      );
    });
  }, [blogList.data]);

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
                <Row gutter={[16, 16]}>{renderBlogList}</Row>
                <S.ShowMoreBtn onClick={() => navigate(ROUTES.USER.BLOG_LIST)}>
                  Xem thêm
                </S.ShowMoreBtn>
              </Col>
              <Col span={2}></Col>
            </Row>
          </S.BlogContainer>
          <S.ReviewContainer>
            <S.ContainerTiltle>
              <span className="title_underline">
                Khách hàng và sneakerWorld
              </span>
              <CustomerSliderHomePage />
              <CustomerReviews reviewList={reviewList} />
            </S.ContainerTiltle>
          </S.ReviewContainer>
        </S.Container>
      )}
    </Fragment>
  );
};

export default UserHomePage;
