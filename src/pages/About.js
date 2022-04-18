import React, { Component } from 'react';
import AboutImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about"style= {{backgroundImage: `url(${AboutImage})`}}>
          <div className="aboutBottom">
              <h1> About Us</h1>
              <p>HKSFSFKSHKFHSKFSLFFHOFORHIREIRIHGHGHGH</p>
          </div>
        
      </div>
    )
  }
}
