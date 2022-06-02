import React, { Component } from 'react';
import "../styles/Home.css";
import video3 from '../assets/video3.mp4'


export default class Part1 extends Component {
  render() {
    return (
      <div className="home" >
          <video src={video3} autoPlay loop muted/> 
      </div>
    )
  }
}