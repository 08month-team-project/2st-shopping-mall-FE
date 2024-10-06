import React, { useState, useEffect } from 'react';
import {
  BasketContainer,
  BasketItems,
  BasketItem,
  ItemImage,
  ItemDetails,
  ItemActions,
  CheckoutSection,
  QuantityInput,
} from '../styles/basketStyle';
import { useNavigate } from 'react-router-dom';

const Basket = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartResponse = await fetch('https://fakestoreapi.com/carts/1');
        const cartData = await cartResponse.json();

        const productsWithDetails = await Promise.all(
          cartData.products.map(async (product) => {
            const productResponse = await fetch(
              `https://fakestoreapi.com/products/${product.productId}`
            );
            const productDetails = await productResponse.json();
            return {
              id: product.productId,
              name: productDetails.title,
              price: productDetails.price,
              quantity: product.quantity,
              size: 'M',
              image: productDetails.image,
              isEditing: false,
              newQuantity: product.quantity,
            };
          })
        );
        setItems(productsWithDetails);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  const handleOrder = () => {
    navigate('/payment', { state: { items } });
  };

  const handleEditToggle = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isEditing: !item.isEditing } : item
      )
    );
  };

  const handleQuantityChange = (id, value) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, newQuantity: value } : item
      )
    );
  };

  const handleUpdate = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.newQuantity, isEditing: false }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const handleKeyPress = (id, event) => {
    if (event.key === 'Enter') {
      handleUpdate(id);
    }
  };

  return (
    <BasketContainer>
      <h1>장바구니 페이지</h1>
      <BasketItems>
        {items.map((item) => (
          <BasketItem key={item.id}>
            <ItemImage>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: 'auto', height: 'auto' }}
              />
            </ItemImage>
            <ItemDetails>
              <p>상품명: {item.name}</p>
              <p>사이즈: {item.size}</p>
              <p>금액: {item.price}원</p>
              <p>
                수량:{' '}
                {item.isEditing ? (
                  <>
                    <QuantityInput
                      type="number"
                      min="1"
                      value={item.newQuantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      onKeyPress={(e) => handleKeyPress(item.id, e)}
                    />
                    <button onClick={() => handleUpdate(item.id)}>
                      수정 완료
                    </button>
                  </>
                ) : (
                  `${item.quantity}개`
                )}
              </p>
            </ItemDetails>
            <ItemActions>
              <button onClick={() => handleEditToggle(item.id)}>
                {item.isEditing ? '취소' : '수정'}
              </button>
              <button onClick={() => handleDelete(item.id)}>삭제</button>
            </ItemActions>
          </BasketItem>
        ))}
      </BasketItems>
      <CheckoutSection>
        <button onClick={handleOrder}>주문하기</button>
        <p>
          최종 금액:{' '}
          {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}원
        </p>
      </CheckoutSection>
    </BasketContainer>
  );
};

export default Basket;
