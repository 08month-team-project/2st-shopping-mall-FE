import React, { useState, useEffect } from 'react';
import {
  BasketContainer,
  BasketItems,
  BasketItem,
  ItemImage,
  ItemDetails,
  ItemActions,
  CheckoutSection,
} from '../styles/basketStyle';

const Basket = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: 1,
          name: '상품 이름 1',
          size: 'M',
          price: 10000,
          quantity: 1,
        },
        {
          id: 2,
          name: '상품 이름 2',
          size: 'L',
          price: 20000,
          quantity: 2,
        },
      ];
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <BasketContainer>
      <h1>장바구니 페이지</h1>
      <BasketItems>
        {items.map((item) => (
          <BasketItem key={item.id}>
            <ItemImage>상품 이미지</ItemImage>
            <ItemDetails>
              <p>상품명: {item.name}</p>
              <p>사이즈: {item.size}</p>
              <p>금액: {item.price}원</p>
              <p>수량: {item.quantity}개</p>
            </ItemDetails>
            <ItemActions>
              <button>수정</button>
              <button>삭제</button>
            </ItemActions>
          </BasketItem>
        ))}
      </BasketItems>
      <CheckoutSection>
        <button>주문하기</button>
        <p>
          최종 금액:{' '}
          {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}원
        </p>
      </CheckoutSection>
    </BasketContainer>
  );
};

export default Basket;
