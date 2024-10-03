import React from "react";
import styled from "styled-components";

const SignupInputContainer = styled.div`
  display: flex;
`;

const Label = styled.label`
  width: 130px;
`;
const SignupInput = styled.input`
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

const Input = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <SignupInputContainer>
      <Label> {label}</Label>
      <SignupInput
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </SignupInputContainer>
  );
};

export default Input;
