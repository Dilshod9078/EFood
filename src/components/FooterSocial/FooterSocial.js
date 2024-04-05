import React from 'react'

function FooterSocial({img, alt}) {
  return (
    <li>
        <a href="#">
            <img src={img} alt={alt} width={39} height={39}/>
        </a>
    </li>
  )
}

export default FooterSocial