import React from "react";

// icon
import DelIcon from "../icons/x-mark.svg";

// style
import {
  Amount,
  Container,
  CsText,
  Del,
  Image,
  ItemInfo,
  ItemInfoText,
  ItemInfoTextInner,
  ItemLi,
  ItemsUl,
  LiDelBtn,
  LiTitle,
  LiTitleBox,
  Name,
  PaymentInfo,
  Price,
  ReceiptBox,
  ReceiptInfo,
  Title,
  Warpper,
} from "../styles/userProfileStyle/userBuyingStyle";

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
      <Title>구매한 물품</Title>
      <Container>
        <ItemsUl>
          {items.map((item, idx) => (
            <ItemLi key={idx}>
              <LiTitleBox>
                <LiTitle>결제완료</LiTitle>
                <Del src={DelIcon} alt="del-icon" />
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
