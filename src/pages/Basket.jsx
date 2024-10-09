import React, { useState, useEffect } from "react";
import {
  BasketContainer,
  BasketItems,
  BasketItem,
  ItemImage,
  ItemDetails,
  ItemActions,
  CheckoutSection,
  QuantityInput,
} from "../styles/basketStyle";
import { useNavigate } from "react-router-dom";
import { XIconCloseBtn } from "../components/button/XIconCloseBtn"; // 경로를 맞춰서 import
import { UniBtn } from "../components/button/UniBtn";
import axios from "axios";

const Basket = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get(
          `http://ec2-3-36-69-202.ap-northeast-2.compute.amazonaws.com:8080/carts?page=${page}`
        );
        const cartData = response.data;
        console.log(cartData);

        const productsWithDetails = cartData.content.map((product) => {
          return {
            id: product.cart_item_id,
            name: product.item_name,
            price: product.item_price,
            quantity: product.quantity,
            size: product.size_name,
            image: product.thumbnail_url,
            status: product.item_status,
            expiredAt: product.expired_at,
            stock: product.current_stock,
            isEditing: false,
            newQuantity: product.quantity,
          };
        });
        setItems(productsWithDetails);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  const handleOrder = () => {
    navigate("/payment", { state: { items } });
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
        item.id === id ? { ...item, newQuantity: Math.max(1, value) } : item
      )
    );
  };

  const handleUpdate = async (id) => {
    try {
      const item = items.find((item) => item.id === id);
      await axios.patch(
        `http://ec2-43-201-251-11.ap-northeast-2.compute.amazonaws.com:8080/carts/items/${id}?quantity=${item.newQuantity}`,
        {
          method: "PATCH",
        }
      );
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.newQuantity, isEditing: false }
            : item
        )
      );
    } catch (error) {
      console.error("수량 업데이트 중 오류 발생:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://ec2-43-201-251-11.ap-northeast-2.compute.amazonaws.com:8080/carts/items?cart_item_id=${id}`,
        {
          method: "DELETE",
        }
      );
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("아이템 삭제 중 오류 발생:", error);
    }
  };

  const handleKeyPress = (id, event) => {
    if (event.key === "Enter") {
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
                style={{ width: "auto", height: "auto" }}
              />
            </ItemImage>
            <ItemDetails>
              {item.status === "ALL_OUT_OF_STOCK" ||
              new Date(item.expiredAt) < new Date() ? (
                <p>품절 혹은 만료된 상품</p>
              ) : (
                <>
                  <p>상품명: {item.name}</p>
                  <p>사이즈: {item.size}</p>
                  <p>금액: {item.price}원</p>
                  <p>
                    수량:{" "}
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
                  </p>{" "}
                </>
              )}
            </ItemDetails>
            <ItemActions>
              <button onClick={() => handleEditToggle(item.id)}>
                {item.isEditing ? "취소" : "수정"}
              </button>
              <button onClick={() => handleDelete(item.id)}>삭제</button>
            </ItemActions>
          </BasketItem>
        ))}
      </BasketItems>
      <CheckoutSection>
        <button onClick={handleOrder}>주문하기</button>
        <p>
          최종 금액:{" "}
          {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}원
        </p>
      </CheckoutSection>
    </BasketContainer>
  );
};

export default Basket;
