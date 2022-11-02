import React from "react";
import { Card, Row, Col } from "antd";

import SyncSlider from "../../components/SyncSlider";

const ProductDetailPage = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={2}></Col>
      <Col span={20}>
        <Row>
          <Col span={12}>
            <Card>
              <SyncSlider />
            </Card>
          </Col>
          <Col span={12}></Col>
        </Row>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default ProductDetailPage;
