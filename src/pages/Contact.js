import React, { Component } from 'react';
import "../styles/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
          
              <h1> Contact Us </h1>
             
              <p class="h-card">
        <Link class="p-name u-url" href="https://oratiletlhabanyane.github.io/WSOA4157A/index.html" > AURORA</Link>
        
        <Link class="u-email" href="mailto:theconversationza@gmail.com">theconversationza@gmail.com</Link>
        
        <Link class="p-street-address" href="https://www.google.com/maps/place/16+Jubilee+Pl,+Jukskei+Park,+Randburg,+2188/data=!4m2!3m1!1s0x1e957683cdf09103:0x775e7a3b81cd6389?sa=X&ved=2ahUKEwi0uKaqscrxAhU1QUEAHYnVBHEQ8gEwAHoECAMQAQ"> 16 Jubilee street, Randburg</Link>
    </p>
          </div>
    )
  }
}