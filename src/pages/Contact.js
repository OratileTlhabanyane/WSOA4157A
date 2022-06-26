import React, { Component } from 'react';
import "../styles/Contact.css";
import {Link} from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div className="contactContent"><h1 className="contactTitle">Contact</h1>
             <main>
<div className="parchment"></div>
<section className="contain">

<p id="labarum"></p>
              <p className="h-card">
 <Link className="p-name u-url" to="https://oratiletlhabanyane.github.io/WSOA4157A/" > AURORA</Link>
        
     <Link className="u-email" to="mailto:theconversationza@gmail.com">theconversationza@gmail.com</Link>
        
        <Link className="p-street-address" to="https://www.google.com/maps/place/16+Jubilee+Pl,+Jukskei+Park,+Randburg,+2188/data=!4m2!3m1!1s0x1e957683cdf09103:0x775e7a3b81cd6389?sa=X&ved=2ahUKEwi0uKaqscrxAhU1QUEAHYnVBHEQ8gEwAHoECAMQAQ"> 16 Jubilee street, Randburg</Link>
    </p>
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