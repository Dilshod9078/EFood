import React from 'react'
import Button from '../Button/Button'

function CategoryList({img, ImgAlt, title, price, Starimg, StarAlt}) {
  return (
    <li className="item flex flex-col items-center justify-center w-[208px] rounded-[12px] bg-white">
      <img className="w-[144px] h-[144px]" src={img} alt={ImgAlt} width={144} height={144} />
      <img className="w-[120px] h-[20px]" src={Starimg} alt={StarAlt} width={120} height={20} />
       <h4 className="mt-[25px] text-[#363853] font-normal text-[15px] leading-[17.78px]">{title}</h4>
       <strong className="my-[10px] font-medium text-[15px] text-[#363853] leading-[17.78px]">{price}</strong>
       <Button btnRounded={2} btnWidth={106} btnPadding={"7px 0"} title={"Add to Cart"} />
    </li>
  )
}

export default CategoryList