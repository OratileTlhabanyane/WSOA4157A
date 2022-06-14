import React, { Component } from 'react';
import ContactImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact"style= {{backgroundImage: `url(${ContactImage})`}}>
          <div className="contactBottom">
              <h1> Contact Us </h1>
              <p>HKSFSFKSHKFHSKFSLFFHOFORHIREIRIHGHGHGH</p>
          </div>

      </div>
    )
  }
}