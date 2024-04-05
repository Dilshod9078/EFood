import React from 'react'

import FooterList from '../FooterList/FooterList'
import FooterSocial from '../FooterSocial/FooterSocial'

import Logo from '../../assets/Images/logo.svg'
import Location from '../../assets/Images/Location.svg'
import Phone from '../../assets/Images/Calling.svg'
import Message from '../../assets/Images/Message.svg'

import Facebook from '../../assets/Images/facebook.svg'
import Instagram from '../../assets/Images/instagram.svg'
import Twitter from '../../assets/Images/twitter.svg'
import Pinterest from '../../assets/Images/pinterest.svg'
import FooterListInner from '../FooterListInner/FooterListInner'

function Footer() {
  return (
    <>
    <footer className="site-footer">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">

          <div>
            <a href="#">
              <img src={Logo} alt="Logo icon" width={116} height={39} />
            </a>
            <ul className="mt-[29px] flex flex-col gap-[15px]">
              <FooterList img={Location} alt={"Location icon"}title={"Dhaka, Bangladesh"} />
              <FooterList img={Phone} alt={"Phone icon"}title={"0943833399"} />
              <FooterList img={Message} alt={"Message icon"}title={"support@efood.com"} />
            </ul>
            <div className="mt-[15px]">
              <ul className="flex items-center gap-[13px]">
              <FooterSocial img={Facebook} alt={"Facebook icon"}/>
              <FooterSocial img={Instagram} alt={"Instagram icon"}/>
              <FooterSocial img={Twitter} alt={"Twitter icon"}/>
              <FooterSocial img={Pinterest} alt={"Pinterest icon"}/>
              </ul>
            </div>
          </div>

            <div>
              <FooterListInner title={"Service"} Link1={"How it works"} Link2={"Home delivery"} Link3={"Prducts"} Link4={"Menu"}/>
            </div>
            <div>
              <FooterListInner title={"Company"} Link1={"About Us"} Link2={"News"} Link3={"Our trusted partner"} Link4={"New users FAQ"}/>
            </div>
            <div>
              <FooterListInner title={"Supports"} Link1={"Help center"} Link2={"Feedbcak"} Link3={"Contact us"} Link4={"Terms conditins"}/>
            </div>
            <div>
              <FooterListInner title={"Resources"} Link1={"Download app"} Link2={"Blog"} Link3={"What’s new"} Link4={"Sitemap"}/>
            </div>

        </div>
      </div>
    </footer>
      <div className="w-full h-[1px] bg-[#969696]"></div>
      <div className="container mx-auto">
      <div className="Info flex items-center justify-between">
          <p className="font-normal text-[14px] leading-[14px] text-[#646464]">© 2021 EFood - All rights reserved.</p>
          <div className="flex items-center gap-[51px]">
            <p className="font-normal text-[14px] leading-[14px] text-[#646464]">Privacy</p>
            <p className="font-normal text-[14px] leading-[14px] text-[#646464]">Security</p>
            <p className="font-normal text-[14px] leading-[14px] text-[#646464]">Terms</p>
          </div>
      </div>
      </div>
      </>
  )
}

export default Footer