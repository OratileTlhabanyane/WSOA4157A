import React, { Component } from 'react';
import "../styles/Home.css";
import "../styles/OldPaperTexture.css";
import video from '../assets/video.mp4';
import piece1 from '../assets/art3.png';
import piece2 from '../assets/art5.jpg';
import piece3 from '../assets/art6.jpg';
import piece4 from '../assets/art8.jpg';



export default class Home extends Component {
  render() {
   
return (
      <section className="container" >
      
      <div className="card">
            <img src={piece1} alt=""/>
        </div>
        <div className="card">
            <img src={piece2} alt=""/>
        </div>
        <div className="card">
            <img src={piece3} alt=""/>
        </div>
        <div className="card">
            <img src={piece4} alt=""/>
        </div>
        <div className="card">
            <img src={piece1} alt=""/>
        </div>
        
        <div className="card">
            <img src={piece2} alt=""/>
        </div>
        <div className="card">
          </div>
          </section>
        
    
    )
  }
} //<video src={video} autoPlay muted/> 
