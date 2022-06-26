import React, { Component } from 'react';
import "../styles/About.css";
import piece1 from '../assets/art5.jpg';
import piece2 from '../assets/david.jpg';
import piece3 from '../assets/rapheal.jpg';

export default class About extends Component {
  render() {
    return (
      <section className="aboutContent">
       <section className= "section-1">
    <h2 className="aboutTitle"> About</h2>
    <p>This website looks at the different Renaissance artworks and uses neon colours to represent the digital side of the website.
      You will find blogs, styleguides and an interesting internet artwork that you can engage with. Enjoy some interesting facts about a few artworks and their artists below!
        
    </p>
     
   </section>

   <section className="section-4 image">
    <img  className="img-responsive" src={piece1}/>
    <div className="image-overlay image-overlay--blur">
        <h2 className="image-title">Mona Lisa: This painting by Leonardo da Vinci was once stolen by a handyman at the Lourve but Pablo Picasso was even a suspect </h2>
        <p className="image-score">
           
        </p>
        <p className="image-description">
            
         </p>
    </div>
</section>

    <section className="section-2 image2">
        <img className="img-responsive2" src={piece2}/>
        <div className="image-overlay2 image-overlay--blur">
            <h2 className="image-title"> David: The beautiful statue of David was sculpted by Michelangelo and it is roughly the size of a 2-story building, or an adult giraffe </h2>
            <p className="image-score2">
              
            </p>
            <p className="image-description2">
                
             </p>
            </div>
        </section>
    
        <section  className="section-3 image3">
            <img className="img-responsive3" src={piece3}/>
            <div className="image-overlay3 image-overlay--blur">
                <h2 className="image-title">Raphael: Raphael and Michelangelo were actually rivals. </h2>
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
