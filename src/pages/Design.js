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
          <div className="designBottom">
              <h1> Design </h1>

              <Link to ="/InternetArt1">
            <button  >
                <div > 
          {Design1.map((designItem, value) => {
            return (
              <DesignItem value = {value} name= {designItem.name} image= {designItem.image}/>
            )
          })}
       
          
        </div>
        </button>
        </Link>
        <Link to ="/InternetArt2">
            <button  >
                <div > 
          {Design2.map((designItem, value) => {
            return (
              <DesignItem value = {value} name= {designItem.name} image= {designItem.image}/>
            )
          })}
       
          
        </div>
        </button>
        </Link>
          </div>
        
      </div>
    )
  }
}

