import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  padding: 2em;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff; /* 포커스 시 파란 테두리 */
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8em;
  margin-top: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;
