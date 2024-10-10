import React from "react";

// style
import {
  Container,
  ItemAmount,
  ItemDate,
  ItemImg,
  ItemName,
  ItemPrice,
  SelledItem,
  Span,
} from "../../../styles/userProfileStyle/userSellingStyle";

// 임시 반복 데이터
const exItems = Array.from({ length: 3 }, (_, i) => ({
  imageUrl: "사진",
  name: `상품명 ${i + 1}`,
  price: 10000,
  stock: 0,
  expiredAt: "24.10.01",
}));

const SoldItems = () => {
  return (
    <Container>
      {exItems.map((item, idx) => (
        <SelledItem key={idx}>
          <ItemImg>{item.imageUrl}</ItemImg>
          <ItemName>{item.name}</ItemName>
          <Span>|</Span>
          <ItemPrice>가격: {item.price.toLocaleString()}원</ItemPrice>
          <Span>|</Span>
          <ItemAmount>재고수량: {item.stock}</ItemAmount>
          <Span>|</Span>
          <ItemDate>판매기간: {item.expiredAt}</ItemDate>
        </SelledItem>
      ))}
    </Container>
  );
};

export default SoldItems;
