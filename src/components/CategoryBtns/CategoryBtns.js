import React from 'react'

import BurgerIcon from '../../assets/Images/Icons'

function CategoryBtns({extraStyle, title, children}) {
  return (
    <button className={`flex items-center justify-center space-x-[8px] ${extraStyle} bg-white rounded-[8px] text-[#363853] text-[20px] font-normal leading-[24px] transition hover:bg-[#FF7A50] hover:text-white hover:shadow-[0px_4px_12px_0px_[#000000]] `}>
         {children}
         <span>{title}</span>
    </button>
  )
}

export default CategoryBtns