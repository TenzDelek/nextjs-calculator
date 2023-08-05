import React from 'react'
import './nav.css'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className='nav_bar'>
        <div className="imgg"><Image src="/logo.png" width={150} height={80}></Image></div>
        <div><ul>
            <li>tenzin Delek</li>
            <li>About</li>
            <li>Work</li>
            <li>Others</li>
        </ul>
        </div>
    </div>
  )
}

export default Nav