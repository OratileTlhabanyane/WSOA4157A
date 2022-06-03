import React, { Component } from 'react';
import ContactImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/Contact.css";

export default class InternetArtwork extends Component {
  render() {
    return (
      <div className="contact"style= {{backgroundImage: `url(${ContactImage})`}}>
          <div className="contactBottom">
              <h1> InternetArtwork </h1>
              <p>HKSFSFKSHKFHSKFSLFFHOFORHIREIRIHGHGHGH</p>
          </div>
        
      </div>
    )
  }
}
