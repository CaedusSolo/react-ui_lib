import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Banner({ children, className }) {
  return (
    <div className={className}>
      <FaCheckCircle className="icon" />
      <div>{children}</div>
    </div>
  );
}

export default Banner;
