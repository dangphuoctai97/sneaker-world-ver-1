import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Checkbox,
  Spin,
  Card,
  Radio,
} from "antd";

import * as S from "./styles";

import { ROUTES } from "../../../constants/routes";
import { SIZE_OPTIONS } from "../CreateProductPage/constants";
import {
  getProductDetailAction,
  getCategoryListAction,
  updateProductAction,
} from "../../../redux/actions";

const AdminUpdateProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateForm] = Form.useForm();

  const { productDetail } = useSelector((state) => state.product);
  const { categoryList } = useSelector((state) => state.category);

  const initialValues = {
    name: productDetail.data.name,
    price: productDetail.data.price,
    gender: productDetail.data.gender,
    size: productDetail.data.size,
    discount: productDetail.data.discount,
    categoryId: productDetail.data.categoryId,
  };

  useEffect(() => {
    dispatch(getProductDetailAction({ id: id }));
    dispatch(getCategoryListAction());
  }, [id]);

  useEffect(() => {
    if (productDetail.data.id) {
      updateForm.resetFields();
    }
  }, [productDetail.data]);

  const handleUpdateProduct = (values) => {
    dispatch(
      updateProductAction({
        id: id,
        values: values,
      })
    );
    navigate(ROUTES.ADMIN.PRODUCT_LIST);
  };

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);

  return (
    <S.Wrapper>
      <S.TopWrapper>
        <h3>Update Product</h3>
        <Button type="primary" onClick={() => updateForm.submit()}>
          Update
        </Button>
      </S.TopWrapper>
      <Spin spinning={productDetail.loading}>
        <Card>
          <Form
            form={updateForm}
            layout="vertical"
            initialValues={initialValues}
            onFinish={(values) => handleUpdateProduct(values)}
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
              label="Cateogry"
              name="categoryId"
              rules={[
                {
                  required: true,
                  message: "This field is required!",
                },
              ]}
            >
              <Select>{renderCategoryOptions}</Select>
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
          </Form>
        </Card>
      </Spin>
    </S.Wrapper>
  );
};

export default AdminUpdateProductPage;
