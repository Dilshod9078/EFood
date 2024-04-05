import React from 'react'

import CategoryBtns from '../CategoryBtns/CategoryBtns'
import CategoryList from '../CategoryList/CategoryList'
import Button from '../Button/Button'

import {Burger, Pizza, Sandwich, AsianFood, SetMenu} from '../../assets/Images/Icons'

import Burger1 from '../../assets/Images/burger1.svg'
import Burger2 from '../../assets/Images/burger2.svg'
import Burger3 from '../../assets/Images/burger3.svg'
import Burger4 from '../../assets/Images/burger4.svg'
import Burger5 from '../../assets/Images/burger5.svg'
import Star from '../../assets/Images/Star.svg'
import Star2 from '../../assets/Images/star2.svg'
import Content from '../../assets/Images/Content.svg'

function Category() {
  return (
    <section className="category-section">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center text-[36px] text-[#363853] font-medium leading-[42.66px]">Our popular <strong className="text-[#FF7A50] font-medium">Category</strong> </h2>
          <div className="mt-[58px] flex items-center justify-between">
            <CategoryBtns extraStyle={"w-[210px] py-[13px]"} title={"Burger"} >
                 <Burger/>
            </CategoryBtns>
            <CategoryBtns extraStyle={"w-[210px] py-[13px]"} title={"Pizza"} >
                 <Pizza/>
            </CategoryBtns>
            <CategoryBtns extraStyle={"w-[210px] py-[13px]"} title={"sandwich"} >
                 <Sandwich/>
            </CategoryBtns>
            <CategoryBtns extraStyle={"w-[210px] py-[13px]"} title={"Asian Food"} >
                 <AsianFood/>
            </CategoryBtns>
            <CategoryBtns extraStyle={"w-[210px] py-[13px]"} title={"Set Menu"} >
                 <SetMenu/>
            </CategoryBtns>
          </div>
          <ul className="my-[40px] flex items-center justify-between">
            <CategoryList img={Burger1} ImgAlt={"Cheesburger"} Starimg={Star2} StarAlt={"Star"} title={"Cheeseburger With Salad"} price={"$18.00"}/>
            <CategoryList img={Burger2} ImgAlt={"Beef Burger"} Starimg={Star} StarAlt={"Star"} title={"Beef Burger"} price={"$15.00"}/>
            <CategoryList img={Burger3} ImgAlt={"Royal Cheesburger"} Starimg={Star2} StarAlt={"Star"} title={"Royel Cheeseburger"} price={"$16.00"}/>
            <CategoryList img={Burger4} ImgAlt={"Black Gambugrer "} Starimg={Star2} StarAlt={"Star"} title={"Black Gambugrer "} price={"$14.00"}/>
            <CategoryList img={Burger5} ImgAlt={"Chicken Burger"} Starimg={Star2} StarAlt={"Star"} title={"Chicken Burger"} price={"$15.00"}/>
          </ul>
          <div className="flex items-center justify-center" >
            <img className="text-center" src={Content} alt="Content icon" width={208} height={34}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Category