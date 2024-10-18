import React from 'react'
import classNames from 'classnames'

function Badge({children, className}) {

  const concatClassNames = classNames(className, `${className}-text-color`)
  
  return (
    <div className={concatClassNames}>
      {children}
    </div>
  )
}

export default Badge