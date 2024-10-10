import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import { getRegisteredItemData } from "../../../api/api";

// icon
import PlusIcon from "../../../icons/plus-circle.svg";
import MinusIcon from "../../../icons/minus-circle.svg";

// style
import {
  AmountIcon,
  Container,
  ItemAmount,
  ItemBox,
  ItemDate,
  ItemImg,
  ItemName,
  ItemPrice,
  ItemWrapper,
  ModifyAmountBox,
  ModifyAmountBtn,
  ModifyAmountNumber,
  Span,
} from "../../../styles/userProfileStyle/userSellingStyle";
import { UniBtn } from "../../button/UniBtn";

// 임시 반복 데이터
const exItems = Array.from({ length: 3 }, (_, i) => ({
  imageUrl: "사진",
  name: `상품명 ${i + 1}`,
  price: 10000,
  stock: 10,
  expiredAt: "24.10.31",
}));
// 한페이지당 물품개수
// const ITEMS_PERPAGE = 3;

// content:[
//   {
//     nickname: "",
//     name: "예시1",
//     imageUrl: "",
//     description: "",
//     price: 0,
//     stock: 0,
//     sizeName: "S",
//     categoryName: "MALE",
//     status: "IN_STOCK",
//     expiredAt: "00.00.00",
//   }
// ]

const OnSale = () => {
  // 받아올 데이터 상태관리
  const [itemsData, setItemsData] = useState([]);

  // 등록된 물품 get
  const handlegetRegisteredItems = async () => {
    try {
      const res = await getRegisteredItemData();
      console.log(res);
      setItemsData((prev) => [...prev, ...res.content]);

      // IN_STOCK <-> OUT_OF_STOCK
      // 초기 수량 설정
      // setItemAmount(res.data.map((item) => item.amount));
    } catch (error) {
      console.log("등록된 상품을 가져오는데 실패했습니다.", error.message);
    }
  };
  useEffect(() => {
    handlegetRegisteredItems();
  }, []);

  // const initialAmounts = items.map((item) => item.amount);
  // const [itemAmount, setItemAmount] = useState(initialAmounts);
  // 변경된 재고수량 상태관리
  // const [onSaleItemsAmount, setOnSaleItemsAmount] = useState(items);
  // const [showItemsMsg, setShowItemsMsg] = useState(
  //   Array(items.length).fill(false)
  // );

  // 페이지네이션
  // const [visibleItems, setVisibleItems] = useState(ITEMS_PERPAGE);
  // const currentItems = items.slice(0, visibleItems);

  // const handleAmountPlus = (idx) => {
  //   setItemAmount((prev) => {
  //     const newAmounts = [...prev];
  //     newAmounts[idx] += 1;
  //     return newAmounts;
  //   });
  // };
  // const handleAmountMinus = (idx) => {
  //   setItemAmount((prev) => {
  //     const newAmounts = [...prev];
  //     if (newAmounts[idx] > 0) {
  //       newAmounts[idx] -= 1;
  //     }
  //     return newAmounts;
  //   });
  // };

  // 재고수정버튼 클릭
  // const handleModifyAmount = (idx) => {
  //   setOnSaleItemsAmount((prev) => {
  //     const newItems = [...prev];
  //     newItems[idx].amount = itemAmount[idx];
  //     return newItems;
  //   });
  //   setShowItemsMsg((prev) => {
  //     const newItemsMsg = [...prev];
  //     newItemsMsg[idx] = true;
  //     return newItemsMsg;
  //   });
  // };

  // 더보기버튼 클릭
  // const handleClickMorePage = () => {
  //   setVisibleItems((prev) => prev + ITEMS_PERPAGE);
  // };

  return (
    <Container>
      {/* 받아온 아이템들 */}
      {itemsData.length > 0 &&
        itemsData.map((item, idx) => (
          <ItemWrapper>
            <ItemBox key={idx}>
              <ItemImg>{item.imageUrl}</ItemImg>
              <ItemName>{item.name}</ItemName>
              <Span>|</Span>
              <ItemPrice>가격: {item.price.toLocaleString()}원</ItemPrice>
              <Span>|</Span>
              <ItemAmount>재고수량: {item.stock}</ItemAmount>
              <Span>|</Span>
              <ItemDate>판매기간: {item.expiredAt}</ItemDate>
            </ItemBox>
            <ModifyAmountBox>
              <ModifyAmountBtn>
                <AmountIcon src={MinusIcon} alt="minus-circle" />
              </ModifyAmountBtn>
              <ModifyAmountNumber>0</ModifyAmountNumber>
              <ModifyAmountBtn>
                <AmountIcon src={PlusIcon} alt="plus-circle" />
              </ModifyAmountBtn>
              <UniBtn bgColor="#404040">재고수정</UniBtn>
            </ModifyAmountBox>
          </ItemWrapper>
        ))}
      {/* 테스트아이템 */}
      {exItems.length > 0 &&
        exItems.map((item, idx) => (
          <ItemWrapper>
            <ItemBox key={idx}>
              <ItemImg>{item.imageUrl}</ItemImg>
              <ItemName>{item.name}</ItemName>
              <Span>|</Span>
              <ItemPrice>가격: {item.price.toLocaleString()}원</ItemPrice>
              <Span>|</Span>
              <ItemAmount>재고수량: {item.stock}</ItemAmount>
              <Span>|</Span>
              <ItemDate>판매기간: {item.expiredAt}</ItemDate>
            </ItemBox>
            <ModifyAmountBox>
              <ModifyAmountBtn>
                <AmountIcon src={MinusIcon} alt="minus-circle" />
              </ModifyAmountBtn>
              <ModifyAmountNumber>0</ModifyAmountNumber>
              <ModifyAmountBtn>
                <AmountIcon src={PlusIcon} alt="plus-circle" />
              </ModifyAmountBtn>
              <UniBtn bgColor="#404040">재고수정</UniBtn>
            </ModifyAmountBox>
          </ItemWrapper>
        ))}

      {/* 더보기버튼 */}
      {/* <Pagination
        items={items}
        handleClickMorePage={handleClickMorePage}
        visibleItems={visibleItems}
      /> */}
    </Container>
  );
};

export default OnSale;
