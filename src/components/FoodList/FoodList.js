import React from 'react'

import ProvideBtn from '../ProvideBtn/ProvideBtn'
import Small from '../../assets/Images/small.svg'


function FoodList({img, alt, title, timeImg, time}) {
  return (
    <li className="bg-white w-[361px] rounded-tl-[53px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[53px]">
       <img src={img} alt={alt} width={361} height={299} />
       <div className="p-[20px] ">
       <h3 className="font-normal text-[24px] leading-[30px] text-[#363853]">{title}</h3>
       <div className="mt-[14px] flex items-center gap-[30px]">
        <div className="flex items-center gap-[8px]">
       <img src={timeImg} alt="Time icon" width={18.5} height={20} />
       <span className="text-[18px] font-light leading-[30px] text-[#363853]">{time}</span>
        </div>
        <ProvideBtn Smallimg={Small} alt={"small icon"}/>
       </div>
       </div>
    </li>
  )
}

export default FoodList