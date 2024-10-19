import React from 'react'

function BannerTitle({children, className}) {
  return (
    <h3 className={className}>{children}</h3>
  )
}

export default BannerTitle