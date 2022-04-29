import React from "react";

const Card = ({ className, title, icon, content, variant, size, info }) => {
  return (
    <div className={`card ${className} ${variant} ${size}`}>
      {icon && <img src={icon} alt="icon" />}
      <p className="card-title">{title}</p>
     <strong>{info}</strong>
      {content}
    </div>
  );
};

export default Card;
