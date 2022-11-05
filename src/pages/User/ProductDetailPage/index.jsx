import { useEffect, useState } from "react";
import {
  Card,
  Row,
  Col,
  Space,
  Radio,
  Breadcrumb,
  InputNumber,
  Tabs,
} from "antd";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";

import {
  getProductDetailAction,
  addToCartAction,
} from "../../../redux/actions";
import SyncSlider from "../../../components/SyncSlider";
import { ROUTES } from "../../../constants/routes";
import { policyList, TAB_ITEMS } from "./constants";
import * as S from "./styles";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const dispatch = useDispatch();

  const [productInfos, setProductInfos] = useState({
    size: undefined,
    quantity: 1,
  });

  const [error, setError] = useState(false);

  const { productDetail } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));
  }, [productId]);

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
          })
        );
  };

  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={2}></Col>
        <Col span={20}>
          <Breadcrumb>
            <Breadcrumb.Item href={ROUTES.USER.HOME}>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Danh sách sản phẩm</Breadcrumb.Item>
          </Breadcrumb>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card>
                <SyncSlider />
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
                  {error ? (
                    <S.MessageError>Vui lòng chọn size</S.MessageError>
                  ) : (
                    ""
                  )}
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
                    max={productDetail.amount}
                  />
                  <S.AddToCartBtn
                    size="large"
                    onClick={() => handleAddToCart()}
                  >
                    <AiOutlineShoppingCart style={{ marginRight: 8 }} />
                    Thêm vào giỏ hàng
                  </S.AddToCartBtn>
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
