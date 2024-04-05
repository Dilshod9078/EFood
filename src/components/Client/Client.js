import React from 'react'

import ClientImg from '../../assets/Images/Saying-img.png'
import LightImg from '../../assets/Images/light.svg'
import RightImg from '../../assets/Images/right.svg'

function Client() {
  return (
   <section className="client-section">
    <div className="container mx-auto">
     <div>
        <h2 className="text-[#363853] text-center text-[36px] leading-[42.66px] font-medium tracking-[0.5px]">What Our Client Are <strong className="font-medium text-[#FF7A50]">Saying</strong> </h2>
        <div className="mt-[60px] flex items-center justify-between">
            <img src={ClientImg} alt="Client image" width={433} height={520} />
            <div className="client-card w-[605px]">
                <div className="Client-text w-[573px]">
                <p className="text-[#363853] text-[20px] leading-[45px] tracking-[0.5px] font-normal ">EFood has the most intriguing food order system in the country. UI in both their app and web Is very simple and easy to use, enhancing the UX. Their delivery men are also quite professional and knows the neighborhood well. Till now I never had to guide them to my address for delivery;</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-[18px]">
                        <strong className="text-[#FF7A50] text-[20px] leading-[23.7px] font-medium">Anglina Jole</strong>
                        <span className="text-[#AAAAAA] text-[14px] leading-[16.6px] font-normal">Food lover</span>
                    </div>
                    <div className="flex items-center gap-[44px]">
                        <img src={LightImg} alt="Light icon" width={32} height={32}/>
                        <img src={RightImg} alt="Right image"  width={32} height={32} />
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
   </section>
  )
}

export default Client