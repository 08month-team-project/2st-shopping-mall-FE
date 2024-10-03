import styled from 'styled-components';

export const BasketContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
`;

export const Header = styled.h1`
  text-align: center;
  padding: 20px;
  background-color: #ccc;
  font-size: 24px;
  font-weight: bold;
`;

export const BasketItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BasketItem = styled.div`
  display: grid;
  grid-template-columns: 150px 2fr 1fr 100px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
`;

export const ItemImage = styled.div`
  width: 150px;
  height: 150px;
  background-color: #e0e0e0;
  font-size: 18px;
  text-align: center;
  line-height: 150px;
  margin-right: 20px; /* 이미지와 옵션 간 간격 추가 */
`;

export const ItemDetails = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 16px;

  p {
    margin: 0;
  }
`;

export const QuantityControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  button {
    padding: 5px 10px;
    font-size: 14px;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  justify-content: center;

  button {
    padding: 5px 10px;
    font-size: 14px;
    background-color: #ff6b6b;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

export const CheckoutSection = styled.div`
  display: flex;
  justify-content: space-between; /* 좌우로 배치 */
  align-items: center;
  margin-top: 20px;
  padding: 10px 0;
`;

export const OrderButton = styled.button`
  padding: 15px 30px;
  background-color: #5cb85c;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;
