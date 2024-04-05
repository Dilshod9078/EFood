import React from 'react'

import SendIcon from '../../assets/Images/send-icon.svg'

function Forms() {
  return (
    <section className="form-section">
        <div className="container mx-auto">
            <div className="form-card flex flex-col items-center justify-center">
               <h2 className="text-[40px] leading-[47.4px] font-medium text-white">Subscribe to get the Latest Offer</h2>
               <p className="mt-[12px] text-white font-normal text-[16px] leading-[30px]">Get our daily updates by subscribing to our newspaper, please drop your email below</p>
               <label className="form-label w-[838px] mt-[31.5px] flex items-center justify-between bg-white py-[10px] rounded-[70px] ">
                 <input className="form-input outline-none	w-[500px] border-none" type="text" required autoComplete="off" placeholder="Enter your email addres" />
                 <button className="w-[191px] py-[15px] rounded-[70px] bg-[#FF7A50] flex items-center justify-center gap-[7.62px]">
                    <img src={SendIcon} alt="Send Icon" width={15.6} height={15.6} />
                    <span className="font-medium text-[20px] leading-[30px] text-white">Subscribe</span>
                 </button>
               </label>
            </div>
        </div>
    </section>
  )
}

export default Forms