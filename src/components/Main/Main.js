import React from 'react'

import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Provide from '../Provide/Provide'
import Food from '../Food/Food'
import Our from '../Our/Our'
import Client from '../Client/Client'
import Forms from '../Forms/Forms'

function Main() {
  return (
      <>
      <main>
       <Hero/>
       <Category/>
       <Provide/>
       <Food/>
       <Our/>
       <Client/>
       <Forms/>
      </main>
      </>
  )
}

export default Main