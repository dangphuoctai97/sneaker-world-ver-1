import { Row, Button, Table, Input, Col, List, Space } from "antd";
import { useNavigate, Link, generatePath } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";

import { ROUTES } from "../../../../../constants/routes";
import {
  updateCartItemAction,
  deleteCartItemAction,
} from "../../../../../redux/actions";
import CartItem from "../CartItem";

import * as S from "./styles";

const Cart = ({ setStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartList } = useSelector((state) => state.cart);
  console.log(cartList);
  const totalPrice = cartList
    .map((item) => item.price * item.quantity)
    .reduce((total, price) => total + price);

  const handleChangeQuantity = (productId, value) => {
    dispatch(
      updateCartItemAction({
        productId: productId,
        quantity: value,
      })
    );
  };

  const handleDeleteCartItem = (productId) => {
    dispatch(
      deleteCartItemAction({
        productId: productId,
      })
    );
  };

  // const tableColumn = [
  //   {
  //     title: "Hình ảnh sản phẩm",
  //     dataIndex: "image",
  //     key: "image",
  //   },
  //   {
  //     title: "Tên sản phẩm",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (_, record) => {
  //       console.log(record);
  //       return (
  //         <Link
  //           to={generatePath(ROUTES.USER.PRODUCT_DETAILS, {
  //             id: `${record.slug}.${record.id}`,
  //           })}
  //         >
  //           {record.productName}
  //         </Link>
  //       );
  //     },
  //   },
  //   {
  //     title: "Size",
  //     dataIndex: "size",
  //     key: "size",
  //   },
  //   {
  //     title: "Số lượng",
  //     dataIndex: "quantity",
  //     key: "quantity",
  //     render: (quantity, record) => (
  //       <InputNumber
  //         min={1}
  //         value={quantity}
  //         onChange={(value) => handleChangeQuantity(record.productId, value)}
  //       />
  //     ),
  //   },
  //   {
  //     title: "Đơn giá",
  //     dataIndex: "price",
  //     key: "price",
  //     render: (price) => `${price.toLocaleString()} VND`,
  //   },
  //   {
  //     title: "Tổng tiền",
  //     dataIndex: "totalPrice",
  //     key: "totalPrice",
  //     render: (_, record) =>
  //       `${(record.price * record.quantity).toLocaleString()} VND`,
  //   },
  //   {
  //     dataIndex: "action",
  //     key: "action",
  //     render: (_, record) => (
  //       <Button
  //         ghost
  //         danger
  //         onClick={() => handleDeleteCartItem(record.productId)}
  //       >
  //         <RiDeleteBin6Line />
  //       </Button>
  //     ),
  //   },
  // ];

  return (
    <>
      {/* <Table
        columns={tableColumn}
        dataSource={cartList}
        rowKey="productId"
        pagination={false}
      /> */}
      <Row style={{ marginTop: "28px" }}>
        <Col span={2}></Col>
        <Col span={20}>
          <Row gutter={[16, 16]}>
            <Col span={17}>
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
              <CartItem></CartItem>
            </Col>
            <Col span={7}>
              <S.CartInfo>
                <List>
                  <List.Item>
                    <h3>Thống kê giỏ hàng</h3>
                  </List.Item>
                  <S.ListItem>
                    <span>Số lượng:</span>
                    <span>{`${cartList.length} sản phẩm`}</span>
                  </S.ListItem>
                  <S.ListItem>
                    <span>Đơn giá:</span>
                    <span>{`${totalPrice.toLocaleString()}đ`}</span>
                  </S.ListItem>
                  <List.Item>
                    <Input addonBefore={"Mã giảm giá"} />
                    <span></span>
                  </List.Item>
                  <S.ListItem>
                    <span style={{ fontSize: "16px", fontWeight: 600 }}>
                      Tổng tiền tạm tính:
                    </span>
                    <span
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >{`${totalPrice.toLocaleString()}đ`}</span>
                  </S.ListItem>
                </List>
                <S.PayMentBtn onClick={() => setStep(1)}>
                  Thanh toán
                </S.PayMentBtn>
              </S.CartInfo>
            </Col>
          </Row>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default Cart;
