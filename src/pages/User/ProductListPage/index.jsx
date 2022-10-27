import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  Badge,
  Input,
  Space,
  Select,
  Image,
  Button,
  Collapse,
  Checkbox,
  Tag,
  Radio,
  Slider,
} from "antd";
import { useSelector, useDispatch } from "react-redux";

import {
  getProductListAction,
  getCategoryListAction,
} from "../../../redux/actions";
import { PRODUCT_LIST_LIMIT } from "../../../constants/pagination";
import { MAX_PRICE, MIN_PRICE, STEP_PRICE, PRICE_MARKS } from "./constant";
import * as S from "./styles";

const UserProductListPage = () => {
  const [filterParams, setFilterParams] = useState({
    categoryId: [],
    gender: undefined,
    keyword: "",
    price: [MIN_PRICE, MAX_PRICE],
    order: undefined,
  });
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);

  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
    dispatch(getCategoryListAction());
  }, []);

  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  const handleShowMore = () => {
    dispatch(
      getProductListAction({
        params: {
          page: productList.meta.page + 1,
          limit: PRODUCT_LIST_LIMIT,
        },
        more: true,
      })
    );
  };

  const handleFilter = (key, value) => {
    setFilterParams({
      ...filterParams,
      [key]: value,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          [key]: value,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearCategoryFilter = (id) => {
    const newCategoryId = filterParams.categoryId.filter((item) => item !== id);
    setFilterParams({
      ...filterParams,
      categoryId: newCategoryId,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          categoryId: newCategoryId,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearKeywordFilter = () => {
    setFilterParams({
      ...filterParams,
      keyword: "",
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          keyword: "",
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const handleClearGenderFilter = () => {
    setFilterParams({
      ...filterParams,
      gender: undefined,
    });
    dispatch(
      getProductListAction({
        params: {
          ...filterParams,
          gender: undefined,
          page: 1,
          limit: PRODUCT_LIST_LIMIT,
        },
      })
    );
  };

  const renderFilterCategory = () => {
    return filterParams.categoryId.map((filterItem) => {
      const categoryData = categoryList.data.find(
        (categoryItem) => categoryItem.id === filterItem
      );
      return (
        <Tag
          color="#08979c"
          key={filterItem}
          closable
          onClose={() => handleClearCategoryFilter()}
        >
          {categoryData.name}
        </Tag>
      );
    });
  };

  const renderFilterGender = () => {
    if (filterParams.gender === undefined) return <></>;
    else if (filterParams.gender === 1)
      return (
        <Tag
          color="#08979c"
          key={filterParams.gender}
          closable
          onClose={() => handleClearGenderFilter(filterParams.gender)}
        >
          Nam
        </Tag>
      );
    return (
      <Tag
        color="#08979c"
        key={filterParams.gender}
        closable
        onClose={() => handleClearGenderFilter(filterParams.gender)}
      >
        Nữ
      </Tag>
    );
  };

  const renderFilterPrice = () => {
    if (
      filterParams.price[0] === MIN_PRICE &&
      filterParams.price[1] === MAX_PRICE
    )
      return null;
    return (
      <Tag
        color="#08979c"
        key={filterParams.price}
        closable
        onClose={() => null}
      >
        {`Từ ${filterParams.price[0].toLocaleString()} VND - ${filterParams.price[1].toLocaleString()} VND`}
      </Tag>
    );
  };

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

  const renderCategoryOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Col span={24} key={item.id}>
          <Checkbox value={item.id}>{item.name}</Checkbox>
        </Col>
      );
    });
  };

  return (
    <>
      <S.Wrapper>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Card size="small">
              <p style={{ fontSize: "16px", borderBottom: "3px solid black" }}>
                Filter
              </p>
              <Space wrap style={{ marginBottom: 16 }}>
                {renderFilterCategory()}
                {renderFilterGender()}
                {renderFilterPrice()}
                {filterParams.keyword && (
                  <Tag
                    color="#08979c"
                    closable
                    onClose={() => handleClearKeywordFilter()}
                  >
                    Keyword: {filterParams.keyword}
                  </Tag>
                )}
              </Space>
              <Collapse expandIconPosition="end">
                <Collapse.Panel header={"Thương hiệu"}>
                  <Checkbox.Group
                    onChange={(value) => handleFilter("categoryId", value)}
                    value={filterParams.categoryId}
                  >
                    <Row>{renderCategoryOptions()}</Row>
                  </Checkbox.Group>
                </Collapse.Panel>
                <Collapse.Panel header={"Giới tính"}>
                  <Radio.Group
                    onChange={(e) => handleFilter("gender", e.target.value)}
                    value={filterParams.gender}
                  >
                    <Space
                      direction="vertical"
                      style={{
                        display: "flex",
                        rowGap: 0,
                      }}
                    >
                      <Radio value={1}>Nam</Radio>
                      <Radio value={2}>Nữ</Radio>
                    </Space>
                  </Radio.Group>
                </Collapse.Panel>
                <Collapse.Panel header={"Giá"}>
                  <Slider
                    range
                    min={MIN_PRICE}
                    max={MAX_PRICE}
                    step={STEP_PRICE}
                    defaultValue={[MIN_PRICE, MAX_PRICE]}
                    marks={PRICE_MARKS}
                    onChange={(value) => handleFilter("price", value)}
                  />
                </Collapse.Panel>
              </Collapse>
            </Card>
          </Col>
          <Col span={18}>
            <Row style={{ marginBottom: "16px" }} gutter={[16, 16]}>
              <Col span={18}>
                <Input.Search
                  placeholder="input search text"
                  enterButton
                  onChange={(e) => handleFilter("keyword", e.target.value)}
                  value={filterParams.keyword}
                />
              </Col>
              <Col span={6}>
                <Select
                  defaultValue={{
                    label: "Sắp xếp theo...",
                  }}
                  style={{ width: "100%" }}
                  onChange={(value) => handleFilter("order", value)}
                >
                  <Select.Option value={"price.asc"}>
                    Giá từ thấp đến cao
                  </Select.Option>
                  <Select.Option value={"price.desc"}>
                    Giá từ cao đến thấp
                  </Select.Option>
                  <Select.Option value={"id.desc"}>Mới nhất</Select.Option>
                </Select>
              </Col>
            </Row>
            <h3 style={{ color: "#08979c" }}>
              Có {productList.meta.total} sản phẩm
            </h3>

            <Row gutter={[16, 16]}>{renderProductList()}</Row>
            {productList.data.length !== productList.meta.total && (
              <Row justify="center">
                <Button
                  style={{ marginTop: 16 }}
                  onClick={() => handleShowMore()}
                >
                  Show more
                </Button>
              </Row>
            )}
          </Col>
        </Row>
      </S.Wrapper>
    </>
  );
};

export default UserProductListPage;
