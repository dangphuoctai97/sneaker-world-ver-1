import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Space,
  Radio,
  InputNumber,
  Tabs,
  notification,
  Image,
  Form,
  Input,
  Rate,
  Avatar,
} from "antd";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  CheckCircleTwoTone,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { GiWalkingBoot } from "react-icons/gi";

import {
  getProductDetailAction,
  addToCartAction,
  favoriteProductAction,
  unFavoriteProductAction,
  postReviewAction,
  getReviewListAction,
} from "../../../redux/actions";
import ReviewItem from "./components/ReviewItem";
import SyncSlider from "../../../components/SyncSlider";
import TopWrapper from "../../../components/TopWrapper";
import { ROUTES, TITLES } from "../../../constants";
import { BREADCRUMB } from "./constants";
import { calcDiscount } from "../../../utils/product";

import * as S from "./styles";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const dispatch = useDispatch();
  const [reviewForm] = Form.useForm();

  const [productInfos, setProductInfos] = useState({
    size: undefined,
    quantity: 1,
  });

  const [error, setError] = useState(false);
  const { productDetail } = useSelector((state) => state.product);
  const { userInfo } = useSelector((state) => state.user);
  const { reviewList } = useSelector((state) => state.review);

  const isLike = userInfo.data.id
    ? productDetail.data.favorites?.some(
        (item) => item.userId === userInfo.data.id
      )
    : false;

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));
    dispatch(getReviewListAction({ productId: productId }));

    document.title = TITLES.USER.PRODUCT_DETAILS;
  }, [productId]);

  const handleNotification = () => {
    notification.open({
      message: "Thông báo",
      description: "Đã thêm sản phẩm vào giỏ hàng",
      icon: (
        <CheckCircleTwoTone
          style={{
            color: "#11f924",
          }}
        />
      ),
    });
  };

  const handleAddToCart = () => {
    productInfos.size === undefined
      ? setError(true)
      : dispatch(
          addToCartAction({
            productId: productId,
            quantity: productInfos.quantity,
            size: productInfos.size,
            price: productDetail.data.price,
            productBrand: productDetail.data.category?.name,
            productName: productDetail.data.name,
            slug: productDetail.data.name,
            amount: productDetail.data.amount,
            discount: productDetail.data.discount,
            image: productDetail.data?.images[0]?.url,
          })
        ) && handleNotification();
  };

  const handleToggleFavorite = () => {
    if (userInfo.data.id) {
      if (isLike) {
        const favoriteData = productDetail.data.favorites?.find(
          (item) => item.userId === userInfo.data.id
        );
        if (favoriteData) {
          dispatch(
            unFavoriteProductAction({
              id: favoriteData.id,
              productId: productDetail.data.id,
            })
          );
        }
      } else {
        dispatch(
          favoriteProductAction({
            userId: userInfo.data.id,
            productId: productDetail.data.id,
          })
        );
      }
    } else {
      notification.warn({ message: "Bạn cần đăng nhập" });
    }
  };

  const TAB_ITEMS = [
    {
      label: <h2>Mô tả</h2>,
      key: "1",
      children: (
        <S.ProductContent
          dangerouslySetInnerHTML={{ __html: productDetail.data.content }}
        />
      ),
    },
    {
      label: <h2>Cách chọn size giày</h2>,
      key: "3",
      children: (
        <>
          <p>
            Để chọn size giày phù hợp với chân của mình, bạn có thể làm theo
            cách sau:
          </p>
          <p>
            <b>Bước 1: </b> Đo chiều dài bàn chân theo huớng dẫn ở hình dưới:
          </p>
          <Row justify="center">
            <Image
              preview={false}
              src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-1.jpg"
            />
          </Row>
          <p>
            <b>Bước 2: </b>Sau khi đo được chiều dài bàn chân, bạn có thể đối
            chiếu với bảng size giày dưới để chọn được size giày phù hợp cho
            mình. Ví dụ chiều dài bàn chân là 26.5cm thì size giày nam Adidas
            phù hợp là 42.
          </p>
          <Row justify="center">
            <Image
              preview={false}
              src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-2.jpg"
            />
          </Row>
          <p>Chúc các bạn lựa chọn được đôi giày ưng ý</p>
        </>
      ),
    },
    {
      label: <h2>Review</h2>,
      key: "2",
      children: (
        <Row>
          <Col span={12}>
            {userInfo.data.id ? (
              <S.ProductRatingForm>
                <h2 className="rating_header">ĐÁNH GIÁ SẢN PHẨM</h2>
                <Form
                  form={reviewForm}
                  layout="vertical"
                  className="rating_form"
                  onFinish={(values) => {
                    handlePostReview(values);
                    reviewForm.resetFields();
                  }}
                >
                  <Form.Item label="Rate" name="rate">
                    <Rate />
                  </Form.Item>
                  <Form.Item label="Comment" name="comment">
                    <Input.TextArea autoSize={{ maxRows: 6, minRows: 2 }} />
                  </Form.Item>
                  <S.CustomBtn htmlType="submit" block>
                    Đánh giá
                  </S.CustomBtn>
                </Form>
              </S.ProductRatingForm>
            ) : (
              <h2 className="rating_header">Đăng nhập để đánh giá sản phẩm</h2>
            )}
            <S.ProductRatingContainer>
              <div className="rating_overview">
                <div className="rating_overview_briefing">4.9 tren 5</div>
                <div className="rating_overview_filter">rating filter</div>
              </div>
              <ReviewItem reviewList={reviewList} />
            </S.ProductRatingContainer>
          </Col>
        </Row>
      ),
    },
  ];

  const handlePostReview = (values) => {
    dispatch(
      postReviewAction({
        ...values,
        userId: userInfo.data.id,
        productId: productDetail.data.id,
      })
    );
  };

  return (
    <>
      <TopWrapper
        breadcrumb={[
          ...BREADCRUMB,
          {
            title: productDetail.data.category?.name,
            path: ROUTES.USER.PRODUCT_LIST,
            state: { categoryId: [productDetail.data.category?.id] },
            icon: <GiWalkingBoot style={{ fontSize: 20 }} />,
          },
          {
            title: productDetail.data.name,
          },
        ]}
        height={200}
      />
      <Row gutter={[16, 16]}>
        <Col span={2}></Col>
        <Col span={20}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card>
                <SyncSlider images={productDetail.data.images} />
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <S.ProductTitle>{productDetail.data.name}</S.ProductTitle>
                {productDetail.data.discount > 0 ? (
                  <S.NewProductPrice>
                    {`${calcDiscount(
                      productDetail.data.price,
                      productDetail.data.discount
                    ).toLocaleString()} ₫ - `}
                    <S.OldProductPrice>{`${productDetail.data.price?.toLocaleString()} ₫`}</S.OldProductPrice>
                  </S.NewProductPrice>
                ) : (
                  <S.NewProductPrice>{`${productDetail.data.price?.toLocaleString()} ₫`}</S.NewProductPrice>
                )}
                <Space>
                  {productDetail.data.category?.id ===
                    productDetail.data.categoryId && (
                    <S.ProductInfo>
                      {`Thương hiệu: ${productDetail.data.category?.name.toUpperCase()}`}
                    </S.ProductInfo>
                  )}
                  <S.ProductInfo style={{ marginLeft: "50px" }}>
                    {`Giới tính: ${
                      productDetail.data.gender === 1 ? "Nam" : "Nữ"
                    }`}
                  </S.ProductInfo>
                </Space>
                <S.ProductInfo>{`Số lượng còn lại: ${productDetail.data.amount}`}</S.ProductInfo>
                <S.ProductInfo>
                  Size:{" "}
                  {productDetail.data.size?.map((item) => {
                    return (
                      <Radio.Group
                        key={item}
                        size="large"
                        buttonStyle="solid"
                        style={{ marginLeft: "4px" }}
                        value={productInfos.size}
                        onChange={(e) => {
                          setError(false);
                          setProductInfos({
                            ...productInfos,
                            size: e.target.value,
                          });
                        }}
                      >
                        <Radio.Button value={item}>{item}</Radio.Button>
                      </Radio.Group>
                    );
                  })}
                  <div>
                    {error ? (
                      <S.MessageError>Vui lòng chọn size</S.MessageError>
                    ) : (
                      ""
                    )}
                  </div>
                </S.ProductInfo>

                <Space style={{ marginTop: 8 }}>
                  <InputNumber
                    defaultValue={1}
                    size="large"
                    onChange={(value) =>
                      setProductInfos({
                        ...productInfos,
                        quantity: value,
                      })
                    }
                    value={productInfos.quantity}
                    min={1}
                    max={productDetail.data.amount}
                  />
                  <S.CustomBtn size="large" onClick={() => handleAddToCart()}>
                    <AiOutlineShoppingCart style={{ marginRight: 8 }} />
                    Thêm vào giỏ hàng
                  </S.CustomBtn>
                  <S.FavoritetBtn
                    ghost={isLike}
                    danger={isLike}
                    size="large"
                    onClick={() => handleToggleFavorite()}
                    icon={isLike ? <HeartFilled /> : <HeartOutlined />}
                  >
                    <span className="liked_count">
                      {productDetail.data?.favorites?.length || 0} liked
                    </span>
                  </S.FavoritetBtn>
                </Space>
                <Card style={{ marginTop: "16px", border: "3px groove" }}>
                  <S.PolicyTitle>Chính sách</S.PolicyTitle>
                  <S.PolicyContent>
                    <S.PolicyItem>
                      <S.CheckIcon />
                      Ship COD toàn quốc
                    </S.PolicyItem>
                    <S.PolicyItem>
                      <S.CheckIcon />
                      Giảm Giá Toàn Bộ Sản Phẩm Lên Đến 60%
                    </S.PolicyItem>
                    <S.PolicyItem>
                      <S.CheckIcon />
                      Nhận hàng và kiểm tra trước khi thanh toán
                    </S.PolicyItem>
                    <S.PolicyItem>
                      <S.CheckIcon />
                      Miễn phí vận chuyển trong nội thành Đà Nẵng
                    </S.PolicyItem>
                  </S.PolicyContent>
                </Card>
              </Card>
            </Col>
          </Row>
          <Row justify="center">
            <Col span={24}>
              <Card>
                <Tabs centered defaultActiveKey="1" items={TAB_ITEMS} />
              </Card>
            </Col>
          </Row>
        </Col>

        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default ProductDetailPage;
