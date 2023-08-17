import React from 'react'
import "./Home.scss"
import profile from "../../assets/me.jpg"

const Home = () => {
  return <div className='home'>
    <div className="details">
        <span className="intro">Hello, I am</span>

        <div className="name">
            <div>
                <h1 className='txt'>RI <br />NA</h1>
            </div>
            <h1 className='txt lg'>T</h1>
            <div className="stack">
                FULL-STACK <b>DEVELOPER</b>
            </div>
        </div>
    </div>

    <div className="profile-img"> 
      <img src={profile} alt="" />
    </div>
  </div>
}

export default Home