import { useEffect } from "react";
import { Button, Table, Space, Pagination, Avatar, Tag } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  generatePath,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

import {
  getProductListAction,
  getCategoryListAction,
  deleteProductAction,
} from "../../../redux/actions";
import { ADMIN_TABLE_LIMIT } from "../../../constants/pagination";
import { ROUTES } from "../../../constants/routes";
import * as S from "./styles";

const AdminProductListPage = () => {
  const dispatch = useDispatch();
  const param = useParams();

  const { productList } = useSelector((state) => state.product);

  const navigate = useNavigate();
  const { categoryList } = useSelector((state) => state.category);

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

  const handleChangePage = (page) => {
    dispatch(
      getProductListAction({
        params: {
          page: page,
          limit: ADMIN_TABLE_LIMIT,
        },
      })
    );
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductAction({ id: id }));
    dispatch(
      getProductListAction({
        params: {
          page: productList.meta.page,
          limit: ADMIN_TABLE_LIMIT,
        },
      })
    );
  };

  const tableColumn = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return (
          <Space>
            <Avatar />
            <h4>{record.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category.name.toUpperCase(),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toLocaleString()} VND`,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => (gender === 1 ? "Nam" : "Nữ"),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (sizes) => (
        <>
          {sizes.map((size) => {
            return (
              <Tag color="geekblue" key={size}>
                {size}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "New Product",
      dataIndex: "isNew",
      key: "isNew",
      render: (isNew) =>
        isNew === true && (
          <Tag color="royalblue" key={isNew}>
            New
          </Tag>
        ),
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (discount) => (discount === undefined ? 0 : `${discount}%`),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        return (
          <Space>
            <Button
              onClick={() =>
                navigate(
                  generatePath(ROUTES.ADMIN.UPDATE_PRODUCT, { id: record.id })
                )
              }
            >
              Update
            </Button>
            <Button onClick={(id) => handleDeleteProduct(record.id)}>
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const tableData = productList.data.map((item) => ({ ...item, key: item.id }));

  return (
    <>
      <S.Wrapper>
        <S.TopWrapper>
          <h2>Product List</h2>
          <Button
            type="primary"
            onClick={() => navigate(ROUTES.ADMIN.CREATE_PRODUCT)}
          >
            Create Product
          </Button>
        </S.TopWrapper>
        <Table
          columns={tableColumn}
          dataSource={tableData}
          pagination={false}
          style={{ flex: 1 }}
        />
        <Pagination
          current={productList.meta.page}
          pageSize={ADMIN_TABLE_LIMIT}
          total={productList.meta.total}
          onChange={(page) => handleChangePage(page)}
          style={{ margin: "16px auto 0" }}
        />
      </S.Wrapper>
    </>
  );
};

export default AdminProductListPage;
