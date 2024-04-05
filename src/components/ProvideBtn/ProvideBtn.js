import React from 'react'

function ProvideBtn({Smallimg, alt}) {
  return (
    <button className="w-[79px] flex items-center justify-center rounded-tr-[20px] rounded-tl-[20px] rounded-br-[0px] rounded-bl-[20px] py-[5px] bg-[#FF7A50] shadow-[0px_5px_12px_0px_#FF683830] ">
        <img src={Smallimg} alt={alt} width={24} height={24}/>
    </button>
  )
}

export default ProvideBtn