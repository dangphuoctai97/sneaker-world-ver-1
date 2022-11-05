import React from "react";
import { Row, Col, Image } from "antd";

import * as S from "./styles";

const CartItem = () => {
  return (
    <S.CartItemWrapper>
      <Row>
        <Col span={6}>
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            width={"100%"}
          />
        </Col>
        <Col span={18}></Col>
      </Row>
    </S.CartItemWrapper>
  );
};

export default CartItem;
