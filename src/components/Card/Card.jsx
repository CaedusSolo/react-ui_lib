import React from "react";
import BrandLogo from "../../assets/brand-icon.png";

function Card({ children, className }) {
  return (
    <div className={className}>
      <img src={BrandLogo} alt="Brand Logo" className="brandLogo" />
      {children}
    </div>
  );
}

export default Card;
