import React from "react";
import PropTypes from "prop-types";
import { type } from "@testing-library/user-event/dist/type";

const InputField = ({ label, type, value, onchange, placeholder }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="common-input"
      />
    </div>
  );
};

InputField.PropTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default InputField;
