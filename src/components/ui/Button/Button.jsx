import React from "react";

const Button = ({ className, variant, content }) => {
  return <button className={`btn ${className} ${variant}`}>{content}</button>;
};

export default Button;
