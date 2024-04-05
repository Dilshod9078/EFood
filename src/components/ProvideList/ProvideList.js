import React from 'react'

function ProvideList({img, alt, width, height, title}) {
  return (
    <li className="provide-item flex items-center gap-[26px]">
        <img src={img} alt={alt} width={width} height={height} />
        <p className="text-[#363853] text-[24px] leading-[30px] font-normal "> {title} </p>
    </li>
  )
}

export default ProvideList