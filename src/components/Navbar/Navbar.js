import React from 'react'

function Navbar({title}) {
  return (
    <li>
        <a className='text-[18px] font-normal text-[#363853] hover:text-[#FF6838]' href="#">{title}</a>
    </li>
  )
}

export default Navbar