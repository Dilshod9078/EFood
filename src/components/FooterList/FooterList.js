import React from 'react'

function FooterList({img, alt, title}) {
  return (
    <li className="flex items-center gap-[7px]">
        <img src={img} alt={alt} width={24} height={24} />
        <p className="text-[#37383D] font-normal text-[16px] leading-[32px]">{title}</p>
    </li>
    )
}

export default FooterList