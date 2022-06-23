import React, { Component } from 'react';
import "../styles/Design.css";
import piece2 from '../assets/art5.jpg';

export default class About extends Component {
  render() {
    return (
      <section className="about">
       <section className= "section-1">
    <h2> Introduction to CoinGecko</h2>
    <p>CoinGecko’s independently sourced crypto data such as live prices, 
        trading volume, exchange volumes, trading pairs, historical data, contract address data, 
        crypto categories, crypto derivatives, images and more. I chose this API because I wanted to explore cryptocurrency through the
        perspective of an artist, this API documentation is not too overwhelming with data and also provides data visualizations which 
        makes the data easy to consume.
        
        
        
    </p>
     
   </section>

   <section className="section-4 image">
    <img  className="img-responsive" src={piece2}/>
    <div className="image-overlay image-overlay--blur">
        <h2 className="image-title">1.</h2>
        <p className="image-score">
           
        </p>
        <p className="image-description">
            
         </p>
    </div>
</section>

    <section className="section-2 image2">
        <img className="img-responsive2" src={piece2}/>
        <div className="image-overlay2 image-overlay--blur">
            <h2 className="image-title">2.</h2>
            <p className="image-score2">
              
            </p>
            <p className="image-description2">
                
             </p>
            </div>
        </section>
    
        <section  className="section-3 image3">
            <img className="img-responsive3" src={piece2}/>
            <div className="image-overlay3 image-overlay--blur">
                <h2 className="image-title">3.</h2>
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
