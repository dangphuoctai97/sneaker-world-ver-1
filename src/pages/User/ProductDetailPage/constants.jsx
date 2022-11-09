import { Image, Space, Row } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { FaShopify } from "react-icons/fa";
import { ROUTES, TITLES } from "../../../constants";

export const policyList = [
  "Ship COD Toàn Quốc",
  "Giảm Giá Toàn Bộ Sản Phẩm Lên Đến 60%",
  "Nhận hàng và kiểm tra trước khi thanh toán",
  "Double Box kèm chống sốc khi giao hàng",
  "Giao hàng nhanh 60 phút trong nội thành Hà Nội và tp Hcm",
];

export const TAB_ITEMS = [
  {
    label: <h2>Mô tả</h2>,
    key: "1",
    children: (
      <Image
        preview={false}
        width={"100%"}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    ),
  },
  {
    label: <h2>Cách chọn size giày</h2>,
    key: "2",
    children: (
      <>
        <p>
          Để chọn size giày phù hợp với chân của mình, bạn có thể làm theo cách
          sau:
        </p>
        <p>
          <b>Bước 1: </b> Đo chiều dài bàn chân theo huớng dẫn ở hình dưới:
        </p>
        <Row justify="center">
          <Image
            preview={false}
            src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-1.jpg"
          />
        </Row>
        <p>
          <b>Bước 2: </b>Sau khi đo được chiều dài bàn chân, bạn có thể đối
          chiếu với bảng size giày dưới để chọn được size giày phù hợp cho mình.
          Ví dụ chiều dài bàn chân là 26.5cm thì size giày nam Adidas phù hợp là
          42.
        </p>
        <Row justify="center">
          <Image
            preview={false}
            src="https://shopgiayreplica.com/wp-content/uploads/2018/07/cach-chon-size-giay-nike-adidas-2.jpg"
          />
        </Row>
        <p>Chúc các bạn lựa chọn được đôi giày ưng ý</p>
      </>
    ),
  },
];

export const BREADCRUMB = [
  {
    title: TITLES.USER.HOME,
    path: ROUTES.USER.HOME,
    icon: <HomeOutlined style={{ fontSize: 20 }} />,
  },
  {
    title: TITLES.USER.PRODUCT_LIST,
    path: ROUTES.USER.PRODUCT_LIST,
    icon: <FaShopify style={{ fontSize: 20 }} />,
  },
];
