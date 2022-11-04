import { Tooltip, Image, Tag } from "antd";

import * as S from "./styles";

const ProductItem = ({ item }) => {
  const calcDiscount = (currentPrice, discount) => {
    return currentPrice - (currentPrice * discount) / 100;
  };

  return (
    <S.ProductContainer>
      <Image
        preview={false}
        src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194453/07/sv03/fnd/PNA/fmt/png/Deviate-NITRO-Women's-Running-Shoes"
      ></Image>
      <S.ProductContent>
        <Tooltip className="product_name" placement="topLeft" title={item.name}>
          <h3>{item.name}</h3>
        </Tooltip>
        <div className="size_amount">
          <Tooltip
            className="product_size"
            placement="topLeft"
            title={item.size?.join(" - ")}
          >
            <Tag color="geekblue" key={item.size}>
              Có {item.size?.length} size
            </Tag>
          </Tooltip>
          <Tag className="product_amount" color="geekblue" key={item.amount}>
            Còn {item.amount} sản phẩm
          </Tag>
        </div>
        <div className="product_price">
          <span>
            <s>{`${item.price.toLocaleString()} ₫`}</s>
            {` -${item.discount}%`}
          </span>
          <p>
            {`${calcDiscount(item.price, item.discount).toLocaleString()} ₫`}
          </p>
        </div>
        <div className="product_category">
          <Tag className="product_gender" color="geekblue" key={item.gender}>
            {item.gender === 1 ? "Nam" : "Nữ"}
          </Tag>
          <h4>{item.category.name.toUpperCase()}</h4>
        </div>
      </S.ProductContent>
    </S.ProductContainer>
  );
};

export default ProductItem;
