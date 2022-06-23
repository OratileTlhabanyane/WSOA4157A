import React, { Component } from 'react';
import DesignImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/Design.css";

export default class Design extends Component {
  render() {
    return (
      <div className="about"style= {{backgroundImage: `url(${DesignImage})`}}>
         <div className="aboutBottom">
        <h1> Wireframes</h1>

        <p >
          <img src="../assets/wireframeimg1.png"/>
        </p>
        </div>
      </div>
    )
  }
}

