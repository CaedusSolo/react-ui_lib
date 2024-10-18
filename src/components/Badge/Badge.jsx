import React from 'react'

function Badge({children, className}) {
  
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Badge