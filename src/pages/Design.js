import React, { Component } from 'react';
import DesignImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import "../styles/Design.css";
import oldwiref1 from '../assets/oldwiref1.jpg';
import oldwiref2 from '../assets/oldwiref2.png';
import oldwiref3 from '../assets/oldwiref3.png';
import newwiref1 from '../assets/newwiref1.jpg';
import newwiref2 from '../assets/newwiref2.jpg';
import newwiref3 from '../assets/newwiref3.jpg';
import styleguide1 from '../assets/Option1.png';
import styleguide2 from '../assets/Option2.png';
import styleguide3 from '../assets/Option3.png';

export default class Design extends Component {
  render() {
    return (
      <section className="design">
       <section className= "section-1">
    <h1 className="designTitle"> Design</h1>
    <p>
        
        
        
    </p>
     
   </section>

   <section className="section-4 image">
    <img  className="img-responsive" src={oldwiref1}/>
    <img  className="img-responsive" src={oldwiref2}/>
    <img  className="img-responsive" src={oldwiref3}/>

    <div className="image-overlay image-overlay--blur">
        <h2 className="image-title">Old wireframes.</h2>
        <p className="image-score">
           
        </p>
        <p className="image-description">
            
         </p>
    </div>
</section>

    <section className="section-2 image2">
    <img  className="img-responsive" src={newwiref1}/>
    <img  className="img-responsive" src={newwiref2}/>
    <img  className="img-responsive" src={newwiref3}/>
        <div className="image-overlay2 image-overlay--blur">
            <h2 className="image-title">New Wireframes.</h2>
            <p className="image-score2">
              
            </p>
            <p className="image-description2">
                
             </p>
            </div>
        </section>
    
        <section  className="section-3 image3">
        <img  className="img-responsive" src={styleguide1}/>
    <img  className="img-responsive" src={styleguide2}/>
    <img  className="img-responsive" src={styleguide3}/>
            <div className="image-overlay3 image-overlay--blur">
                <h2 className="image-title">Colour Schemes Options.</h2>
                <p className="image-score3">
                  
                </p>
                <p className="image-description3">
                    
                 </p>
            </div>
        </section>
 
      </section>
    )
  }
}

