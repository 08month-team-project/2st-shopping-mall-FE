import React from "react";

// style
import {
  Amount,
  Container,
  CsText,
  Image,
  ItemInfo,
  ItemInfoText,
  ItemInfoTextInner,
  ItemLi,
  ItemsUl,
  LiTitle,
  LiTitleBox,
  Name,
  PaymentInfo,
  Price,
  ReceiptBox,
  ReceiptInfo,
  Warpper,
} from "../styles/userProfileStyle/userBuyingStyle";
import { XIconCloseBtn } from "../components/button/XIconCloseBtn";
import { UserTitle } from "../components/userProfile/UserTitle";

const items = [
  {
    image: "대표이미지",
    name: "상품1",
    price: 10000,
    amount: 1,
  },
  {
    image: "대표이미지",
    name: "상품2",
    price: 10000,
    amount: 1,
  },
  {
    image: "대표이미지",
    name: "상품3",
    price: 10000,
    amount: 1,
  },
  {
    image: "대표이미지",
    name: "상품4",
    price: 10000,
    amount: 1,
  },
  {
    image: "대표이미지",
    name: "상품5",
    price: 10000,
    amount: 1,
  },
];

const Buying = () => {
  return (
    <Warpper>
      <UserTitle>구매한 물품</UserTitle>
      <Container>
        <ItemsUl>
          {items.map((item, idx) => (
            <ItemLi key={idx}>
              <LiTitleBox>
                <LiTitle>결제완료</LiTitle>
                <XIconCloseBtn top="0" right="0" />
              </LiTitleBox>
              <ItemInfo>
                <Image>{item.image}</Image>
                <ItemInfoText>
                  <ItemInfoTextInner>
                    <Name>{item.name}</Name>
                    <Amount>{item.amount}개 구매</Amount>
                  </ItemInfoTextInner>
                  <Price>{item.price.toLocaleString()}원</Price>
                  <CsText>고객센터</CsText>
                </ItemInfoText>
              </ItemInfo>
              <ReceiptBox>
                <ReceiptInfo>온라인영수증</ReceiptInfo>
                <PaymentInfo>결제정보</PaymentInfo>
              </ReceiptBox>
            </ItemLi>
          ))}
        </ItemsUl>
      </Container>
    </Warpper>
  );
};

export default Buying;
