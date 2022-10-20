import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import {
  getCategoryListAction,
  createProductAction,
} from "../../../redux/actions";
import { SIZE_OPTIONS } from "./constants";
import * as S from "./styles";

const AdminCreateProductPage = () => {
  const dispatch = useDispatch();
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
    dispatch(createProductAction({ data: values }));
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
