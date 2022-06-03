import './App.css';
import Navbar from './components/Navbar.js';
import render from './components/Navbar.js';
import ScrollToHome from './components/ScrollToHome.js';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Part1 from './pages/Part1.js';
import Part2 from './pages/Part2.js';
import Footer from './components/Footer.js';
import Blogs from './pages/Blogs.js';
import About from './pages/About.js';
import Design from './pages/Design';
import InternetArtwork from './pages/InternetArtwork.js';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';
import Blog6 from './pages/Blog6';
import React, { Component } from 'react';
import Logo from './assets/Logo2.png';
import {Link} from 'react-router-dom'; //Link is the react version of <a href =''></a>
import "./styles/navbar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import {useRef} from "react";




function App() {
  
 
  const Homepagee = useRef (null);
  const Aboutt = useRef (null);
  const Blogss = useRef (null);
  const Designn = useRef (null);
  const InternetArtworkk = useRef (null);

  const blogg1 = useRef (null);
  const blogg2 = useRef (null);
  const blogg3 = useRef (null);
  const blogg4 = useRef (null);
  const blogg5 = useRef (null);
  const blogg6 = useRef (null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',

    })
  }
  class Navbar extends Component {
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
            <Link onClick={() => scrollToSection(Homepagee)}>Home</Link>
            <Link onClick={() => scrollToSection(Aboutt)}> About</Link>
            <Link onClick={() => scrollToSection(Blogss)}> Blogs</Link>
            <Link onClick={() => scrollToSection(Designn)}> Design</Link>
            <Link onClick={() => scrollToSection(InternetArtworkk)}> InternetArtwork</Link>
            </div>
        </div>
  
        <div className="rightSide">
        <Link onClick={() => scrollToSection(Homepagee)}>Home</Link>
            <Link onClick={() => scrollToSection(Aboutt)}> About</Link>
            <Link onClick={() => scrollToSection(Blogss)}> Blogs</Link>
            <Link onClick={() => scrollToSection(Designn)}> Design</Link>
            <Link onClick={() => scrollToSection(InternetArtworkk)}> InternetArtwork</Link>
          <button type="button" onClick = {this.toggleNav}><ReorderIcon/></button>
          </div> 
          
      </div>
   
        //the hamburger is a button that will be togglng between the states of being visible and not visible when clicking
      )
    }
  }


  return (
    <div className="App"> 
    
      <Navbar />
      <ScrollToHome/>
      <Switch>
      <Route onClick={() => scrollToSection(Homepagee)} component ={Home}/>
      <Route onClick={() => scrollToSection(Aboutt)} component ={About}/>
      <Route onClick={() => scrollToSection(Blogss)} component ={Blogs}/>
        <Route onClick={() => scrollToSection(blogg1)} component={Blog1} />
        <Route onClick={() => scrollToSection(blogg2)} component={Blog2}/>
        <Route onClick={() => scrollToSection(blogg3)} component={Blog3}/>
        <Route onClick={() => scrollToSection(blogg4)} component={Blog4}/>
      </Switch>
    
  
        <Part1/>
        <Part2/>
      <div  ref={Aboutt}>
        <About />
      </div>
      <div  ref={Blogss}>
        <Blogs />
      </div>
      <div  ref={blogg1}>
        <Blog1 />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div  ref={blogg2}>
        <Blog2 />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div  ref={blogg3}>
        <Blog3 />
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div  ref={blogg4}>
        <Blog4/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div  ref={blogg5}>
        <Blog5/>
        </div>
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div  ref={blogg6}>
        <Blog6/>
        </div>
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      
    
      <div  ref={Designn}>
        <Design />
      </div>
      <div  ref={InternetArtworkk}>
        <InternetArtwork />
      </div>

      <Footer />
    </div>
    

  );
  
}

//navbar is not be part of rerouting and it is is going to stand by its on

export default App;
