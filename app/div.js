import React from 'react'
import './delek.css'
import Nav from './component/nav'
import Mains from './main'
const page = () => {
  return (<div>
    <Nav/>
    <div className='tenzin'><Mains/></div>
  <div className="delek">my name is tenzin</div>
  <div className="pema">I am Pema</div>
  </div>
  )
}

export default page