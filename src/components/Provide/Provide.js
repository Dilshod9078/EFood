import React from 'react'

import ProvideList from '../ProvideList/ProvideList'
import Button from '../Button/Button'

import Delivery from '../../assets/Images/delivery.png'
import TimerIcon from '../../assets/Images/Timericon.svg'
import DeliveryIcon from '../../assets/Images/Deliveryicon.svg'
import RestruntIcon from '../../assets/Images/Resturenticon.svg'

function Provide() {
  return (
    <section className="provide-section">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <img src={Delivery} alt="Delivery image" width={626} height={723} />
                <div>
                    <div className="w-[384px]">
                    <h2 className="font-medium text-[36px] leading-[50px] "><strong className="text-[#FF6838] font-medium">Stay </strong> At home, we will Provide <strong className="text-[#FF6838] font-medium">Good food</strong> </h2>
                    </div>
                    <div className="w-[449px] mt-[30px]">
                        <p className="font-normal text-[20px] leading-[30px]">We provide tasty food and superfast delivery at your home.  Let’s use our services right now and get discounts of up to 50%.</p>
                    </div>
                    <ul className="mt-[20px]">
                    <ProvideList img={TimerIcon} alt={"Timeer icon"} width={37} height={34} title={"Fasted Delivery in 30 Minutes"} />
                    <ProvideList img={DeliveryIcon} alt={"Delivery icon"} width={37} height={29} title={"300+ Delivery Men"} />
                    <ProvideList img={RestruntIcon} alt={"RestruntIcon icon"} width={37} height={37} title={"500+ Restaurant & Cafe Shop"} />
                    </ul>
                    <div className="mt-[49px]">
                    <Button btnWidth={176} btnPadding="17px 0" btnRounded="30px 30px 1px 30px" btnShadow="0 22px 40px 0 #FF683830" title={"See more"} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Provide