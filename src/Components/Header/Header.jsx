import React from 'react'
import './Header.scss'

const Header = () => {
  return (
  <header>
    <div className="logo">
      <h1>Rinat <i>Zabirov</i></h1>
    </div>

    <nav>
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">GET IN TOUCH</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header