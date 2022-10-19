import { useEffect } from "react";
import { Row, Col, Card, Badge, Input, Space, Select, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";
import { ADMIN_TABLE_LIMIT } from "../../../constants/pagination";
import * as S from "./styles";

const UserProductListPage = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const { categoryList } = useSelector((state) => state.category);

  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: ADMIN_TABLE_LIMIT,
        },
      })
    );
    dispatch(getCategoryListAction());
  }, []);

  const renderProductList = () => {
    return productList.data.map((item) => {
      return (
        <Col span={6} key={item.id}>
          <Badge.Ribbon
            color="red"
            text={item.discount === 0 ? "" : `-${item.discount}%`}
          >
            <Card size="small">
              <Image
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                width={200}
              ></Image>
              <Space>
                <p style={{ fontSize: "16px" }}>{item.name}</p>
              </Space>
              <Space>
                <s>{`${item.price.toLocaleString()} VND`}</s>
                {`${calcDiscount(
                  item.price,
                  item.discount
                ).toLocaleString()} VND`}
              </Space>
            </Card>
          </Badge.Ribbon>
        </Col>
      );
    });
  };

  return (
    <>
      <S.Wrapper>
        <Row>
          <Col span={6}>Filter</Col>
          <Col span={18}>
            <Space style={{ marginBottom: "16px" }}>
              <Input.Search
                placeholder="input search text"
                // onSearch={onSearch}
                enterButton
                style={{ width: "770px" }}
              />
              <Select
                defaultValue={{
                  label: "Sắp xếp theo...",
                }}
                style={{ width: "200px" }}
              >
                <Select.Option>Giá từ thấp đến cao</Select.Option>
                <Select.Option>Giá từ cao đến thấp</Select.Option>
              </Select>
            </Space>
            <Row gutter={16}>{renderProductList()}</Row>
          </Col>
        </Row>
      </S.Wrapper>
    </>
  );
};

export default UserProductListPage;
