import { useEffect, useState } from "react";
import { Button, Table, Space, Pagination, Tag, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";

import {
  getProductListAction,
  getCategoryListAction,
  deleteProductAction,
} from "../../../redux/actions";
import LoadingWrapper from "../../../components/LoadingWrapper";
import { ADMIN_TABLE_LIMIT } from "../../../constants/pagination";
import { ROUTES, TITLES } from "../../../constants/";
import * as S from "./styles";

const AdminProductListPage = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { productList } = useSelector((state) => state.product);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      getProductListAction({
        params: {
          page: 1,
          limit: ADMIN_TABLE_LIMIT,
          order: "id.desc",
        },
      })
    );
    dispatch(getCategoryListAction());
    document.title = TITLES.ADMIN.PRODUCT_LIST;
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
          order: "id.desc",
        },
      })
    );
  };

  const tableData = productList.data.map((item) => ({
    ...item,
    key: item.id,
  }));

  const tableColumn = [
    {
      title: "Thứ tự",
      dataIndex: "stt",
      key: "stt",
      sorter: (a, b) => a.id - b.id,
      render: (_, record) => {
        return (
          <Space
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 50,
            }}
          >
            <h4>{record.id}</h4>
          </Space>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      render: (_, record) => {
        console.log(
          "🚀 ~ file: index.jsx ~ line 72 ~ AdminProductListPage ~ record",
          record
        );
        return (
          <Space>
            <Image
              // preview={{
              //   visible: false,
              // }}
              // onClick={() => setVisible(true)}
              src={record.images[0]?.url}
              alt={record.images[0]?.name}
              style={{
                width: "80px",
                height: "auto",
                borderRadius: "10px",
              }}
            />
            {/* <div
              style={{
                display: "none",
              }}
            >
              <Image.PreviewGroup
                preview={{
                  visible,
                  onVisibleChange: (vis) => setVisible(vis),
                }}
              >
                <Image
                  src={record.images[0]?.url}
                  alt={record.images[0]?.name}
                />
                <Image
                  src={record.images[1]?.url}
                  alt={record.images[1]?.name}
                />
                <Image
                  src={record.images[2]?.url}
                  alt={record.images[2]?.name}
                />
                <Image
                  src={record.images[3]?.url}
                  alt={record.images[3]?.name}
                />
                <Image
                  src={record.images[4]?.url}
                  alt={record.images[4]?.name}
                />
              </Image.PreviewGroup>
            </div> */}
            <h4>{record.name}</h4>
          </Space>
        );
      },
    },
    {
      title: "",
      dataIndex: "images",
      key: "images",
      render: (images) => {
        <>
          {images.map((item) => {
            return (
              <img
                key={item.id}
                src={`data:image/jpeg;base64,${item.url}`}
                alt=""
                style={{ height: 200, width: 200 }}
              />
            );
          })}
        </>;
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

  return (
    <>
      {productList.loading ? (
        <LoadingWrapper />
      ) : (
        <S.Wrapper>
          <S.TopWrapper>
            <h2>Quản lý sản phẩm</h2>
            <Button
              type="primary"
              onClick={() => navigate(ROUTES.ADMIN.CREATE_PRODUCT)}
            >
              Create Product
            </Button>
          </S.TopWrapper>
          <Table
            rowKey="id"
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
      )}
    </>
  );
};

export default AdminProductListPage;
