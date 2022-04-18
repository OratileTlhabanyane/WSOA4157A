import React, { Component } from 'react';
import "../styles/Home.css";
import HomepageBanner from '../assets/matty-adame-MSD_DtDcCQo-unsplash.jpg';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home" style= {{backgroundImage: `url(${HomepageBanner})`}}> 
          <div className="headerContainer">
            <Link to ='/about'>
              <button>ENTER THE OCEAN</button>
            </Link>
          </div>
      </div>
    )
  }
}
