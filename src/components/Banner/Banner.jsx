import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import { FaInfoCircle } from "react-icons/fa";
import classNames from 'classnames'

function Banner({ children, className, variant, type }) {
  const classes = classNames(className, variant, type)

  function getIcon() {
    const className = 'icon'
    if (variant === 'success') {
      return <FaCheckCircle className={className} />
    }
    else if (variant === 'warning') {
      return <IoWarning className={className} />
    }
    else if (variant === 'error') {
      return <VscError className={className} />
    }
    else {
      return <FaInfoCircle className={className} />
    }

  }

  return (
    <div className={classes}>
      {getIcon()}
      <div>{children}</div>
    </div>
  );
}

export default Banner;
