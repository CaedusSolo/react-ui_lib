import React from "react";

function CardTitle({ children, className }) {
  return (
    <h3 className={className}>
      {children}
    </h3>
  );
}

export default CardTitle;
