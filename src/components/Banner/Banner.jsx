import React from "react";

function Banner({ children, className }) {
  return <div className={className}>{children}</div>;
}

export default Banner;
