import React, { Component } from 'react';
import "../styles/Home.css";
import HomepageBanner from '../assets/matty-adame-MSD_DtDcCQo-unsplash.jpg';
import {Link} from 'react-router-dom';
import video from '../assets/video.mp4'


export default class Home extends Component {
  render() {
    return (
      <div className="home" >
          <video src={video} autoPlay muted/> 
          <div className="headerContainer">
            
          
          <button type='button'> ENTER THE OCEAN</button>
            
           
          </div>
          
      </div>
    )
  }
}
