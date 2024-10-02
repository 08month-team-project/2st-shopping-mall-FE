import React from "react";

const Input = ({ label, name, type, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
