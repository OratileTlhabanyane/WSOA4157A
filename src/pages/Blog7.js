import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog7 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
     
       <button> <Link to ="/Blog6">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> <button> <Link to ="/Blog8">NEXT</Link></button> 
    <main>
    <div className="parchment"></div>
<section className="contain">
<h2 className="inkTitle">Asssignment 2 Reflection</h2>
<p id="labarum"></p>
<p>

   </p>

      <p>

  </p>
  

<p>

   </p>

      <p>

  </p>
      <p><strong> words</strong></p>
      <h3>Bibliography </h3>
     
      
      <ul> 
   
    </ul> 
        <p className="cachet"></p>
<section id="signature"> <time  datetime="2022"></time> <br/>Author: Oratile Tlhabanyane</section>
</section>
</main>

<svg>
<filter id="wavy2">
<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
<feDisplacementMap in="SourceGraphic" scale="20" />
</filter>
</svg>
    </article>
  );
}
}