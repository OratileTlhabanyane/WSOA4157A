import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";



export default class Blog3 extends Component {
  
  render() {

  return (
    <div className="homeContent" >
       
      
    <main>
<div className="parchment"></div>
<div className="contain">
<h1 className="inkTitle">Internet Artwork - Edited Preparatory work</h1>
<p id="labarum"></p>
<p>

   </p> 
      <p>

  </p>
      <p><strong> words</strong></p>
      <h2>Bibliography </h2>
     
      
      <ul> 
   
    </ul> 
        <p className="cachet"></p>
<div id="signature"> <time  datetime="2022"></time> <br/>Author: Oratile Tlhabanyane</div>
</div>
</main>

<svg>
<filter id="wavy2">
<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
<feDisplacementMap in="SourceGraphic" scale="20" />
</filter>
</svg>
    </div>
  );
}
}