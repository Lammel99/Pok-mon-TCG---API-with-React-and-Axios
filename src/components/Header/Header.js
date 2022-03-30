import React from 'react'
import logo from '../../assets/logo.png'
import {Navigation, ConteinerHeader} from './Style'
const Header = () => {
  return (
    <ConteinerHeader>
      <nav>
        <img src={logo}/>

        <ul>
        <li>Home</li>
        <li>Lista</li>
        </ul>
      </nav>
    </ConteinerHeader>
  )
}

export default Header