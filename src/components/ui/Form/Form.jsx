import React from "react";

const Form = ({ className, children, onSubmit }) => {
  return (
    <form className={`form ${className}`} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
