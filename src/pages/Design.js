import React, { Component } from 'react';
import DesignImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/Design.css";

export default class About extends Component {
  render() {
    return (
      <div className="design"style= {{backgroundImage: `url(${DesignImage})`}}>
          <div className="designBottom">
              <h1> Design </h1>
              <p>HKSFSFKSHKFHSKFSLFFHOFORHIREIRIHGHGHGH</p>
          </div>
        
      </div>
    )
  }
}
import React from 'react'

export const Design = () => {
  return (
    <div>Design</div>
  )
}
