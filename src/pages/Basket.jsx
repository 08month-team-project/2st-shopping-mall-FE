// import React, { useState, useEffect } from 'react';
// import BasketItem from '../components/basketItems/BasketItem';
// import BasketSummary from '../components/basketItems/BasketSummary';
// import { BasketContainer, Title, BasketItemsContainer } from '../styles/basketStyle';

// const Basket = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = [
//         {
//           id: 1,
//           name: '상품 이름 1',
//           size: 'M',
//           price: 10000,
//           quantity: 1,
//         },
//         {
//           id: 2,
//           name: '상품 이름 2',
//           size: 'L',
//           price: 20000,
//           quantity: 2,
//         },
//       ];
//       setItems(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <BasketContainer>
//       <Title>장바구니 페이지</Title>
//       <BasketItemsContainer>
//         {items.map((item) => (
//           <BasketItem key={item.id} item={item} />
//         ))}
//       </BasketItemsContainer>
//       <BasketSummary items={items} />
//     </BasketContainer>
//   );
// };
// const BasketItem = ({ item }) => {
//   return (
//     <BasketItemContainer>
//       <ItemImage>상품 이미지</ItemImage>
//       <ItemDetails>
//         <p>상품명: {item.name}</p>
//         <p>사이즈: {item.size}</p>
//         <p>금액: {item.price}원</p>
//         <p>수량: {item.quantity}개</p>
//       </ItemDetails>
//       <ItemActions>
//         <button>수정</button>
//         <button>삭제</button>
//       </ItemActions>
//     </BasketItemContainer>
//   );
// };
// const BasketSummary = ({ items }) => {
//   const totalPrice = items.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <CheckoutSection>
//       <span>최종 금액: {totalPrice}원</span>
//       <CheckoutButton>주문하기</CheckoutButton>
//     </CheckoutSection>
//   );
// };

// export default Basket;
