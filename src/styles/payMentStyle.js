import styled from 'styled-components';

export const PaymentPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const OrderSummary = styled.h3`
  text-align: right;
  font-size: 20px;
  color: #333;
`;

export const PaymentInfo = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AddressDetails = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AddressInput = styled(Input)`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const CartItems = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
  border-radius: 8px;
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemDetailSpan = styled.span`
  font-size: 14px;
  color: #555;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

export const PaymentButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #e60023;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c9001f;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
