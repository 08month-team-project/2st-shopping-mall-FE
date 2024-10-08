import React, { useEffect, useState } from "react";
import { XIconCloseBtn } from "../../button/XIconCloseBtn";

// icon
import PlusIcon from "../../../icons/plus-circle.svg";
import MinusIcon from "../../../icons/minus-circle.svg";

// style
import {
  AmountIcon,
  Container,
  Item,
  ItemAmount,
  ItemBox,
  ItemInfoBox,
  ItemName,
  ItemPrice,
  ModifyAmountBox,
  ModifyAmountBtn,
  ModifyAmountNumber,
} from "../../../styles/userProfileStyle/userSellingStyle";
import { UniBtn } from "../../button/UniBtn";

const baseURL = "http://localhost:8080/";

const items = [
  {
    name: "상품1",
    price: 10000,
    amount: 10,
  },
  {
    name: "상품2",
    price: 10000,
    amount: 5,
  },
];

const OnSale = () => {
  const initialAmounts = items.map((item) => item.amount);
  const [itemAmount, setItemAmount] = useState(initialAmounts);
  const [onSaleItems, setOnSaleItems] = useState([]);

  const handleAmountPlus = (idx) => {
    setItemAmount((prev) => {
      const newAmounts = [...prev];
      newAmounts[idx] += 1;
      return newAmounts;
    });
  };
  const handleAmountMinus = (idx) => {
    setItemAmount((prev) => {
      const newAmounts = [...prev];
      if (newAmounts[idx] > 0) {
        newAmounts[idx] -= 1;
      }
      return newAmounts;
    });
  };

  // 등록상품 데이터 GET
  const getRegisterItems = async () => {
    try {
      const res = await axios.get(`${baseURL}/items/seller/{seller-id}/active`);
      setOnSaleItems(res.data);
    } catch (error) {
      console.log("등록상품을 가져오는데 실패했습니다. : ", error.message);
    }
  };
  useEffect(() => {
    getRegisterItems();
  }, []);

  return (
    <Container>
      <ItemBox>
        {items.map((item, idx) => (
          <Item key={idx}>
            <ItemInfoBox>
              <XIconCloseBtn top="5px" right="5px" />
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
              <ItemAmount>재고 : {item.amount}개</ItemAmount>
            </ItemInfoBox>
            <ModifyAmountBox>
              <ModifyAmountBtn onClick={() => handleAmountMinus(idx)}>
                <AmountIcon src={MinusIcon} alt="minus-circle" />
              </ModifyAmountBtn>
              <ModifyAmountNumber>{itemAmount[idx]}</ModifyAmountNumber>
              <ModifyAmountBtn onClick={() => handleAmountPlus(idx)}>
                <AmountIcon src={PlusIcon} alt="plus-circle" />
              </ModifyAmountBtn>
              <UniBtn bgColor="#404040">재고수정</UniBtn>
            </ModifyAmountBox>
          </Item>
        ))}

        {/* 데이터 get */}
        {onSaleItems.length > 0 &&
          onSaleItems.map((item, idx) => (
            <Item key={idx}>
              <ItemInfoBox>
                <XIconCloseBtn top="5px" right="5px" />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                <ItemAmount>재고 : {item.amount}개</ItemAmount>
              </ItemInfoBox>
              <ModifyAmountBox>
                <ModifyAmountBtn onClick={() => handleAmountMinus(idx)}>
                  <AmountIcon src={MinusIcon} alt="minus-circle" />
                </ModifyAmountBtn>
                <ModifyAmountNumber>{itemAmount[idx]}</ModifyAmountNumber>
                <ModifyAmountBtn onClick={() => handleAmountPlus(idx)}>
                  <AmountIcon src={PlusIcon} alt="plus-circle" />
                </ModifyAmountBtn>
                <UniBtn bgColor="#404040">재고수정</UniBtn>
              </ModifyAmountBox>
            </Item>
          ))}
      </ItemBox>
    </Container>
  );
};

export default OnSale;
