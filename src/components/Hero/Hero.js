import React from 'react'

import Button from '../Button/Button';
import HeroImg from "../../assets/Images/hero-img.png"


function Hero() {
  return (
    <section className="hero-section py-[40px]">
      <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="w-[530px]">
              <h2 className="text-[#363853] text-[66px] leading-[78px] font-medium"> Super fast <strong className="text-[#FF6838] text-[66px] leading-[78px] font-medium">Food delivery</strong> Service</h2>
              <div className="w-[513px]">
              <p className="text-[#363853] font-normal text-[20px] leading-[30px] mt-[23px]">We provide super fast-delivery service. Let’s use our services right now and get discounts of up to 50%</p>
              </div>
              <div className="mt-[45px] flex items-center gap-[30px]">
                <Button btnRounded={5} btnPadding="10px 0" btnWidth={"163px"} title={"Explore Food"} btnShadow={"0 22px 40px 0 #FF683830"}/>
                <a href="#" className="text-[20px] leading-[23.7px] text-[#363853] underline">Download App</a>
              </div>
            </div>
            <div>
            <img className="w-[600px] h-[650px]" src={HeroImg} alt="Hero img"/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero