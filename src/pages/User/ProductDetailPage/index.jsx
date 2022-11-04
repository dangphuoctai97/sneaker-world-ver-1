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

import { getProductDetailAction } from "../../../redux/actions";
import SyncSlider from "../../../components/SyncSlider";
import { ROUTES } from "../../../constants/routes";
import { policyList, TAB_ITEMS } from "./constants";
import * as S from "./styles";

const ProductDetailPage = () => {
  const { id } = useParams();
  const productId = parseInt(id.split(".")[1]);
  const dispatch = useDispatch();

  const [productQuantity, setProductQuantity] = useState(1);

  const { productDetail } = useSelector((state) => state.product);

  const [size, setSize] = useState(undefined);

  useEffect(() => {
    dispatch(getProductDetailAction({ id: productId }));
  }, [productId]);

  const handleAddToCart = () => {};

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
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      >
                        <Radio.Button value={item}>{item}</Radio.Button>
                      </Radio.Group>
                    );
                  })}
                </S.ProductInfo>
                <Space style={{ marginTop: 8 }}>
                  <InputNumber
                    defaultValue={1}
                    size="large"
                    onChange={(value) => setProductQuantity(value)}
                    value={productQuantity}
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
                      Miễn phí vận chuyển trong 5km
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
