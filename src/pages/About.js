import React, { Component } from 'react';
import "../styles/About.css";
import piece2 from '../assets/art5.jpg';

export default class About extends Component {
  render() {
    return (
      <section className="about">
       <section className= "section-1">
    <h2 className="aboutTitle"> About</h2>
    <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        
        
        
    </p>
     
   </section>

   <section className="section-4 image">
    <img  className="img-responsive" src={piece2}/>
    <div className="image-overlay image-overlay--blur">
        <h2 className="image-title">1. The Mona Lisa was painted between the year 1509 and 1519 by Leonardo da Vinci</h2>
        <p className="image-score">
           
        </p>
        <p className="image-description">
            
         </p>
    </div>
</section>

    <section className="section-2 image2">
        <img className="img-responsive2" src={piece2}/>
        <div className="image-overlay2 image-overlay--blur">
            <h2 className="image-title">2. This painting was once stolen by a handyman at the Lourve but Pablo Picasso was even a suspect </h2>
            <p className="image-score2">
              
            </p>
            <p className="image-description2">
                
             </p>
            </div>
        </section>
    
        <section  className="section-3 image3">
            <img className="img-responsive3" src={piece2}/>
            <div className="image-overlay3 image-overlay--blur">
                <h2 className="image-title">3.It has an insuarance valuation of $100 000 making it the high lnow insurance value in art</h2>
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
