import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Blogs from './pages/Blogs.js';
import About from './pages/About';
import Design from './pages/Design';
import Contact from './pages/Contact';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';


function App() {
  return (
    <div className="App"> 
      <Navbar/>
      <Switch>
        <Route exact path='/' component ={Home}/>
        <Route exact path='/blogs' component ={Blogs}/>
        <Route exact path='/about' component ={About}/>
        <Route exact path='/design' component ={Design}/>
        <Route exact path='/contact' component ={Contact}/>
        <Route exact path='/blog1' component ={Blog1}/>
        <Route exact path='/blog2' component ={Blog2}/>
        <Route exact path='/blog3' component ={Blog3}/>
        <Route exact path='/blog4' component ={Blog4}/>
      </Switch>
      <Footer />
    </div>
  );
}
//navbar is not be part of rerouting and it is is going to stand by its on

export default App;
