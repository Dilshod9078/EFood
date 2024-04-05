import React from 'react'

import Navbar from '../Navbar/Navbar';
import BtnIcons from '../BtnIcons/BtnIcons';
import Button from '../Button/Button';

import SiteLogo from "../../assets/Images/logo.svg"
import SiteSearch from "../../assets/Images/Search.svg"
import SiteBasket from "../../assets/Images/basket.svg"


function Header() {
  return (
    <header className='site-header'>
    <div className="container mx-auto">
      <div className='flex justify-between'>
        <a href="/">
         <img src={SiteLogo} alt="Site logo" width={106} height={38}/>
        </a>
        <nav className="flex items-center">
          <ul className='flex items-center gap-[60px]'>
             <Navbar title={"Home"}/>
             <Navbar title={"Service"}/>
             <Navbar title={"Top cities"}/>
             <Navbar title={"Contract"}/>
          </ul>
          <div className="mx-[60px] flex items-center gap-[60px]">
            <BtnIcons imgURL={SiteSearch} imgAlt={"Search icon"} imgWidth={24} imgHeight={24}/>
            <BtnIcons imgURL={SiteBasket} imgAlt={"Basket icon"} imgWidth={18.5} imgHeight={18}/>
          </div>
          <Button btnRounded={"5px"} btnPadding="10px 0" btnWidth="120px" title={"Sign Up"} btnShadow={"0 22px 40px 0 #FF683830"}/>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header