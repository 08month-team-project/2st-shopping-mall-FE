import React from "react";

// style
import {
  Container,
  ItemAmount,
  ItemBox,
  ItemCountBox,
  ItemImg,
  ItemInfoText,
  ItemName,
  ItemPrice,
  SelledItem,
} from "../../../styles/userProfileStyle/userSellingStyle";

const items = [
  {
    image: "대표이미지",
    name: "상품1",
    price: 10000,
    amount: 10,
  },
  {
    image: "대표이미지",
    name: "상품2",
    price: 10000,
    amount: 10,
  },
  {
    image: "대표이미지",
    name: "상품3",
    price: 10000,
    amount: 10,
  },
  {
    image: "대표이미지",
    name: "상품4",
    price: 10000,
    amount: 10,
  },
  {
    image: "대표이미지",
    name: "상품5",
    price: 10000,
    amount: 10,
  },
];

const SoldItems = () => {
  return (
    <Container>
      <ItemBox>
        {items.map((item, idx) => (
          <SelledItem key={idx}>
            <ItemImg>{item.image}</ItemImg>
            <ItemInfoText>
              <ItemName>{item.name}</ItemName>
              <ItemCountBox>
                <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                <ItemAmount>재고 : {item.amount}개</ItemAmount>
              </ItemCountBox>
            </ItemInfoText>
          </SelledItem>
        ))}
      </ItemBox>
    </Container>
  );
};

export default SoldItems;
