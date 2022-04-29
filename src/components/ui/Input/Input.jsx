import React from "react";

const Input = ({ id, type, label, placeholder }) => {
  return (
    <div className="input">
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
