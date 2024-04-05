import React from 'react'

import FoodList from '../FoodList/FoodList'

import Blaze from '../../assets/Images/Blaze.png'
import Ranch from '../../assets/Images/Ranch.png'
import Hut from '../../assets/Images/Hut.png'
import Burger from '../../assets/Images/Burger.png'
import KFS from '../../assets/Images/KFS.png'
import Star from '../../assets/Images/Star.png'

import TimeIcon from '../../assets/Images/timeicon.svg'

function Food() {
  return (
    <section className="food-section">
        <div className="container mx-auto">
            <div>
                <h2 className="text-center font-medium text-[36px] text-[#000000] ">Top Food <strong className="font-medium text-[#FF6838]"> Restaurant</strong> </h2>
                <ul className="mt-[50px] flex items-center flex-wrap justify-between gap-[43px]">
                  <FoodList img={Blaze} alt={"Blaze Image"} title={"Blaze Pizza"} timeImg={TimeIcon} time={"11.00 AM - 10.00 PM"}/>
                  <FoodList img={Ranch} alt={"Ranch Image"} title={"Pizza Ranch"} timeImg={TimeIcon} time={"09.00 AM - 10.00 PM"}/>
                  <FoodList img={Hut} alt={"Hut Image"} title={"Dion’s Pizza Hut"} timeImg={TimeIcon} time={"10.00 AM - 12.00 PM"}/>
                  <FoodList img={Burger} alt={"Burger Image"} title={"Royel Burger"} timeImg={TimeIcon} time={"11.00 AM - 10.00 PM"}/>
                  <FoodList img={KFS} alt={"KFS Image"} title={"KFC Restaurant"} timeImg={TimeIcon} time={"09.00 AM - 10.00 PM"}/>
                  <FoodList img={Star} alt={"Star Image"} title={"Star Food"} timeImg={TimeIcon} time={"10.00 AM - 12.00 PM"}/>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Food