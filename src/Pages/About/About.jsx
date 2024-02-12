import React from 'react'
import BackGround from "../../assets/AboutPage/background.jpg"
import './About.css'
const About = () => {
  return (
    <div>
      <div className="aboutTitle">
        <h1>About Wild One</h1>
      </div>
      <div className="description">
        <img src={BackGround} alt="" />
      </div>
    </div>
  )
}

export default About