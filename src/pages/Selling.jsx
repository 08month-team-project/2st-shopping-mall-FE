import React, { useState } from "react";

// style
import {
  Container,
  Title,
  ItemBox,
  Item,
  Warpper,
  TitleBox,
  ItemInfoBox,
  ItemImg,
  ItemName,
  ItemPrice,
  ItemAmount,
  ItemInfoText,
  ItemCountBox,
  SelledItem,
} from "../styles/userProfileStyle/userSellingStyle";
import { XIconCloseBtn } from "../components/button/XIconCloseBtn";

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

const Selling = () => {
  const [isSelling, setIsSelling] = useState(true);

  const handleSwitchMenu = (boolean) => {
    setIsSelling(boolean);
  };
  return (
    <Warpper>
      <TitleBox>
        <Title isActive={isSelling} onClick={() => handleSwitchMenu(true)}>
          판매중인 물품
        </Title>
        <Title isActive={!isSelling} onClick={() => handleSwitchMenu(false)}>
          판매완료된 물품
        </Title>
      </TitleBox>
      {isSelling ? (
        // {/* 판매중 */}
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
      ) : (
        // {/* 판매완료 */}
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
      )}
    </Warpper>
  );
};

export default Selling;
