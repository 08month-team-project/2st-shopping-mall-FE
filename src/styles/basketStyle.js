import styled from 'styled-components';

export const BasketContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const BasketItems = styled.div`
  margin-bottom: 20px;
`;

export const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ItemDetails = styled.div`
  p {
    margin: 5px 0;
  }
`;

export const ItemActions = styled.div`
  button {
    padding: 10px 15px;
    margin-right: 5px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const CheckoutSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    background-color: #28a745;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;

// .basket-container {
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   background-color: #f9f9f9;
// }

// .basket-items {
//   margin-bottom: 20px;
// }

// .basket-item {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 15px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   margin-bottom: 10px;
//   background-color: #fff;
// }

// .item-image {
//   width: 100px;
//   height: 100px;
//   background-color: #eaeaea;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 4px;
// }

// .item-details p {
//   margin: 5px 0;
// }

// .item-actions button {
//   padding: 10px 15px;
//   margin-right: 5px;
//   border: none;
//   border-radius: 4px;
//   background-color: #007bff;
//   color: #fff;
//   cursor: pointer;
//   transition: background-color 0.3s;
// }

// .item-actions button:hover {
//   background-color: #0056b3;
// }

// .checkout-section {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 20px;
// }

// .checkout-section button {
//   padding: 10px 20px;
//   background-color: #28a745;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;
// }
