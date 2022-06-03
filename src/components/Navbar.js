import React, { Component } from 'react'
import Logo from '../assets/Logo2.png';
import {Link} from 'react-router-dom' //Link is the react version of <a href =''></a>
import "../styles/navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

export default class Navbar extends Component {
  constructor(props) {//creating a stage using properties that will make the hamburger visible
    super(props);
    this.state = {
      openLinks: false
    };
    this.toggleNav = this.toggleNav.bind(this);//you need to bind this function to 'this' (just a mandatory rule)
  }


  toggleNav(){ //current state of hamburger is false so we want to toggle this and turn the state into true when clicked
    this.setState (prevState => ({
      openLinks : !prevState.openLinks
    }));
  }

  render() { //"this.state.openLinks ? "open" :"close"  " translates to if the openLinks state is true(?) then go to ID css called open and do what is stated otherwise(:) do ID css close says
    return (
      <div className="navbar">
          <div className="leftSide" id={this.state.openLinks ? "open" :"close" }>
              <img src={Logo}/>
              <div className="hiddenLinks">
              <Link to ='/'>Home</Link>
              <Link to ='/about'> About</Link>
              <Link to ='/blogs'> Blogs</Link>
              <Link to ='/design'> Design</Link>
              <Link to ='/contact'> Contact</Link>
              </div>
          </div>

          <div className="rightSide">
              <Link to ='/'>Home</Link>
              <Link to ='/about'> About</Link>
              <Link to ='/blogs'> Blogs</Link>
              <Link to ='/design'> Design</Link>
              <Link to ='/contact'> Contact</Link>
              <button onClick = {this.toggleNav}><ReorderIcon/></button>
          </div> 
          
      </div>
      //the hamburger is a button that will be togglng between the states of being visible and not visible when clicking
    )
  }
}