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
  Upload,
} from "antd";
import slug from "slug";
import { PlusOutlined } from "@ant-design/icons";

import {
  getProductListAction,
  getCategoryListAction,
  createProductAction,
} from "../../../redux/actions";
import { SIZE_OPTIONS } from "./constants";
import { ROUTES } from "../../../constants/routes";
import {
  convertBase64ToImage,
  convertImageToBase64,
} from "../../../utils/file";
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

  const handleCreateProduct = async (values) => {
    const { images, ...productValues } = values;

    const newImages = [];

    for (let i = 0; i < images.length; i++) {
      const imgBase64 = await convertImageToBase64(images[i].originFileObj);
      await newImages.push({
        name: images[i].name,
        type: images[i].type,
        path: imgBase64,
      });
    }
    await dispatch(
      createProductAction({
        values: {
          ...productValues,
          categoryId: parseInt(productValues.categoryId),
          slug: slug(productValues.name),
        },
        images: newImages,
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
          <Form.Item
            label="Images"
            name="images"
            valuePropName="fileList"
            getValueFromEvent={(e) => {
              if (Array.isArray(e)) return e;
              return e?.fileList;
            }}
            rules={[
              {
                required: true,
                message: "This field is required!",
              },
            ]}
          >
            <Upload listType="picture-card" beforeUpload={Upload.LIST_IGNORE}>
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Tải ảnh lên</div>
              </div>
            </Upload>
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
