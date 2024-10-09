import React from "react";

// style
import {
  Container,
  ItemAmount,
  ItemBox,
  ItemInfoBox,
  ItemName,
  ItemPrice,
  SelledItem,
} from "../../../styles/userProfileStyle/userSellingStyle";

const items = [
  {
    name: "상품1",
    price: 10000,
    amount: 0,
  },
  {
    name: "상품2",
    price: 10000,
    amount: 0,
  },
];

const SoldItems = () => {
  return (
    <Container>
      <ItemBox>
        {items.map((item, idx) => (
          <SelledItem key={idx}>
            <ItemInfoBox>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
              <ItemAmount>재고 : {item.amount}개</ItemAmount>
            </ItemInfoBox>
          </SelledItem>
        ))}
      </ItemBox>
    </Container>
  );
};

export default SoldItems;
