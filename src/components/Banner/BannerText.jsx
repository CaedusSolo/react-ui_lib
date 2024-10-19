import React from 'react'

function BannerText({children, className}) {
  return (
    <p className={className}>{children}</p>
  )
}

export default BannerText