import React from 'react'

function Button({btnWidth, title, btnPadding, btnRounded, btnShadow}) {
  return (
    <button style={{"width":btnWidth, "padding":btnPadding, "border-radius":btnRounded, "box-shadow":btnShadow}} className={`header-btn hover:opacity-[0.7] duration-[0.3s] bg-[#FF7A50] text-white font-normal ${btnShadow}`}>{title}</button>
  )
}

export default Button