import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
} from "antd";
import slug from "slug";

import {
  getProductListAction,
  getCategoryListAction,
  createProductAction,
} from "../../../redux/actions";
import { SIZE_OPTIONS } from "./constants";
import { ROUTES } from "../../../constants/routes";
import * as S from "./styles";

const AdminCreateProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryListAction());
  }, []);

  const renderCategoryListOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  };

  const handleCreateProduct = (values) => {
    dispatch(
      createProductAction({
        values: {
          ...values,
          categoryId: parseInt(values.categoryId),
          slug: slug(values.name),
        },
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.PRODUCT_LIST),
        },
      })
    );
  };

  return (
    <>
      <h2>Create product form</h2>
      <Card>
        <Form
          name="createProductForm"
          layout="vertical"
          labelCol={{ span: 2 }}
          onFinish={(values) => handleCreateProduct(values)}
        >
          <Form.Item
            label="Product name"
            name="name"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="categoryId"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Select>{renderCategoryListOptions()}</Select>
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <InputNumber
              addonAfter={"VND"}
              min={1}
              max={100000000}
              formatter={(value) =>
                `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            />
          </Form.Item>
          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Radio.Group size="large">
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Checkbox.Group options={SIZE_OPTIONS} />
          </Form.Item>
          <Form.Item label="New Product" name="isNew" valuePropName="checked">
            <Checkbox />
          </Form.Item>
          <Form.Item label="Discount" name="discount">
            <InputNumber
              min={0}
              max={100}
              addonAfter={"%"}
              formatter={(value) => `${value}`}
              parser={(value) => value.replace("%", "")}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Create product
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default AdminCreateProductPage;
