import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Design1} from '../Assistance/DesignList.js';
import {Design2} from '../Assistance/DesignList.js';
import DesignItem from '../components/DesignItems.js';
import DesignImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/Design.css";

export default class About extends Component {
  render() {
    return (
      <div className="design"style= {{backgroundImage: `url(${DesignImage})`}}>

        
        
      </div>
    )
  }
}

