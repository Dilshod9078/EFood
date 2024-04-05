import React from 'react'

import MobileImg from '../../assets/Images/mobile.png'
import DownloadApp from '../../assets/Images/Download-app.svg'

function Our() {
  return (
    <section className="our-section">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <div className="w-[538px]">
                    <h2 className="text-[36px] font-medium leading-[50px] text-[#363853]">Download  Our <strong className="text-[#FF6838] font-medium">Mobile App</strong></h2>
                    <p className="my-[30px] text-[#363853] text-[20px] leading-[30px] font-normal">It's all at your fingertips -- the restaurants you love. Find the right food to suit your mood, and make the first bite last. Go ahead, download app and get 50% discount</p>
                    <img src={DownloadApp} alt="Download app" width={290} height={40} />
                </div>
                <img src={MobileImg} alt="Mobil img" width={616} height={480} />
            </div>
        </div>
    </section>
  )
}

export default Our