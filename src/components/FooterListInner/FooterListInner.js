import React from 'react'

function FooterListInner({title, Link1, Link2, Link3, Link4}) {
  return (
    <>
    <strong className="text-[18px] leading-[49px] font-semibold text-[#37383D]">{title}</strong>
    <ul>
        <li>
            <a className="text-[18px] leading-[49px] font-normal text-[#37383D]" href="#">{Link1}</a>
        </li>
        <li>
            <a className="text-[18px] leading-[49px] font-normal text-[#37383D]" href="#">{Link2}</a>
        </li>
        <li>
            <a className="text-[18px] leading-[49px] font-normal text-[#37383D]" href="#">{Link3}</a>
        </li>
        <li>
            <a className="text-[18px] leading-[49px] font-normal text-[#37383D]" href="#">{Link4}</a>
        </li>
    </ul>
    </>
  )
}

export default FooterListInner