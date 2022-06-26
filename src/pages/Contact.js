import React, { Component } from 'react';
import "../styles/Contact.css";
import {Link} from 'react-router-dom';
import InstagramCard from "../components/InstagramCard"
import GmailCard from "../components/GmailCard"
import FacebookCard from "../components/FacebookCard"
import LinkedIn from "../components/LinkedIn"

export default class Contact extends Component {
  render() {
    return (
      <div className="contactContent"><h1 className="contactTitle">Contact</h1>
             <main>
<div className="parchment"></div>
<section className="contain">

<p id="labarum"></p>
              <p className="h-card">
</p>
<FacebookCard/>
<InstagramCard/>
<GmailCard/>
<LinkedIn/>
    <p className="cachet"></p>
</section>
</main>

<svg>
<filter id="wavy2">
<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
<feDisplacementMap in="SourceGraphic" scale="20" />
</filter>
</svg>
   
  );
          </div>
    )
  }
}