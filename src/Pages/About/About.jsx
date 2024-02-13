import React from "react";
import BackGround from "../../assets/AboutPage/background.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="aboutTitle">
        <h1>About Wild One</h1>
        <p>
          <b>
            Good Product stars with <br />
            Good ingredients
          </b>
        </p>
      </div>
      <div className="backgroundImage">
        <img src={BackGround} alt="" />
      </div>
      <div className="description">
       
      </div>
    </div>
  );
};

export default About;
