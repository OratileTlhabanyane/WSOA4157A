import './App.css';
import Navbar from './components/Navbar.js';
import render from './components/Navbar.js';
import ScrollToHome from './components/ScrollToHome.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
import Contact from './pages/Contact';
import React, { Component } from 'react';



class App extends Component {
  render() {

  return (
    <div className="App"> 
  <Router>
      <Navbar />
    
      <Switch>
      <Route exact path='/' component ={Home}/>
      <Route exact path='/blogs' component ={Blogs}/>
      <Route exact path='/about' element ={<About/>}/>
        <Route exact path='/design' component ={Design}/>
        <Route exact path='/internetartwork' component ={InternetArtwork}/>
        <Route exact path='/contact' component ={Contact}/>
        <Route exact path='/blog1' component ={Blog1}/>
        <Route exact path='/blog2' component ={Blog2}/>
        <Route exact path='/blog3' component ={Blog3}/>
        <Route exact path='/blog4' component ={Blog4}/>
        <Route exact path='/blog5' component ={Blog5}/>
        <Route exact path='/blog6' component ={Blog6}/>
        <Route path="/" component={Home}/>
      </Switch></Router>

      <Footer />
    </div>
    

  );
  }
}

//navbar is not be part of rerouting and it is is going to stand by its on

export default App;
