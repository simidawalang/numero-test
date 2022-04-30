import React from "react";

const Card = ({ className, title, icon, content, variant, size, info }) => {
  return (
    <div className={`card ${className} ${variant} ${size}`}>
      {icon && <img className="card-icon" src={icon} alt="icon" />}
      <div className="card-info">
        <p className="card-title">{title}</p>
        <strong>{info}</strong>
        {content}
      </div>
    </div>
  );
};

export default Card;
