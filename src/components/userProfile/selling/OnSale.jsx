import React, { useEffect, useState } from "react";
import axios from "axios";
import { XIconCloseBtn } from "../../button/XIconCloseBtn";
import { UniBtn } from "../../button/UniBtn";

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
  ItemWrapper,
  ModifyAmountBox,
  ModifyAmountBtn,
  ModifyAmountNumber,
} from "../../../styles/userProfileStyle/userSellingStyle";
import { UserMsg } from "../UserMsg";

const baseURL = "http://localhost:8080";

const items = [
  {
    name: "상품명1",
    price: 10000,
    amount: 10,
  },
  {
    name: "상품명2",
    price: 10000,
    amount: 5,
  },
];

const OnSale = () => {
  const initialAmounts = items.map((item) => item.amount);
  const [itemAmount, setItemAmount] = useState(initialAmounts);
  // 변경된 재고수량 상태관리
  const [onSaleItemsAmount, setOnSaleItemsAmount] = useState(items);
  const [showItemsMsg, setShowItemsMsg] = useState(
    Array(items.length).fill(false)
  );

  // 데이터 상태관리
  // const [itemsData, setItemsData] = useState([]);

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

  // 재고수정버튼클릭
  const handleModifyAmount = (idx) => {
    setOnSaleItemsAmount((prev) => {
      const newItems = [...prev];
      newItems[idx].amount = itemAmount[idx];
      return newItems;
    });
    setShowItemsMsg((prev) => {
      const newItemsMsg = [...prev];
      newItemsMsg[idx] = true;
      return newItemsMsg;
    });
  };

  // 등록한상품 데이터 GET
  // const getRegisteredItems = async () => {
  //   try {
  //     const res = await axios.get(`${baseURL}/items/seller/{seller-id}/active`);
  //     setItemsData(res.data);
  //     console.log(res.data);
  //     // 초기 수량 설정
  //     setItemAmount(res.data.map((item) => item.amount));
  //   } catch (error) {
  //     console.log("등록된 상품을 가져오는데 실패했습니다.", error.message);
  //   }
  // };
  // useEffect(() => {
  //   getRegisteredItems();
  // }, []);

  return (
    <Container>
      <ItemBox>
        {items.map((item, idx) => (
          <ItemWrapper>
            <Item key={idx}>
              <ItemInfoBox>
                <XIconCloseBtn />
                <ItemName>{item.name}</ItemName>
                <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
                {/* 원래 재고수량 */}
                <ItemAmount>재고 : {item.amount}개</ItemAmount>
              </ItemInfoBox>

              <ModifyAmountBox>
                <ModifyAmountBtn onClick={() => handleAmountMinus(idx)}>
                  <AmountIcon src={MinusIcon} alt="minus-circle" />
                </ModifyAmountBtn>
                {/* 수정될 재고수량 */}
                <ModifyAmountNumber>{itemAmount[idx]}</ModifyAmountNumber>
                <ModifyAmountBtn onClick={() => handleAmountPlus(idx)}>
                  <AmountIcon src={PlusIcon} alt="plus-circle" />
                </ModifyAmountBtn>
                <UniBtn
                  bgColor="#404040"
                  onClick={() => handleModifyAmount(idx)}
                >
                  재고수정
                </UniBtn>
              </ModifyAmountBox>
            </Item>
            {showItemsMsg[idx] && (
              <UserMsg>물품의 재고 수량이 변경되었습니다.</UserMsg>
            )}
          </ItemWrapper>
        ))}

        {/* 데이터 get */}
        {/* {itemsData.length > 0 &&
          itemsData.map((item, idx) => (
            <ItemWrapper>
              <Item key={idx}>
                <ItemInfoBox>
                  <XIconCloseBtn />
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
                  <UniBtn
                    bgColor="#404040"
                    onClick={() => handleModifyAmount(idx)}
                  >
                    재고수정
                  </UniBtn>
                </ModifyAmountBox>
              </Item>
              {showItemsMsg[idx] && (
                <UserMsg>물품의 재고 수량이 변경되었습니다.</UserMsg>
              )}
            </ItemWrapper>
          ))} */}
      </ItemBox>
    </Container>
  );
};

export default OnSale;
