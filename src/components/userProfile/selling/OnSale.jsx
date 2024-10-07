import React from "react";
import { XIconCloseBtn } from "../../button/XIconCloseBtn";

// style
import {
  Container,
  Item,
  ItemAmount,
  ItemBox,
  ItemCountBox,
  ItemImg,
  ItemInfoBox,
  ItemInfoText,
  ItemName,
  ItemPrice,
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

const OnSale = () => {
  return (
    <Container>
      <ItemBox>
        {items.map((item, idx) => (
          <Item key={idx}>
            <XIconCloseBtn top="5px" right="5px" />
            <ItemInfoBox>
              <ItemImg>{item.image}</ItemImg>
              <ItemInfoText>
                <ItemName>{item.name}</ItemName>
                <ItemCountBox>
                  <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                  <ItemAmount>재고 : {item.amount}개</ItemAmount>
                </ItemCountBox>
              </ItemInfoText>
            </ItemInfoBox>
          </Item>
        ))}
      </ItemBox>
    </Container>
  );
};

export default OnSale;
