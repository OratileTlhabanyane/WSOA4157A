import React, { Component } from 'react';
import "../styles/BlogText.css";
import "../styles/Blogs.css";
import Blog4Image from '../assets/naomi-tamar-u1iIIQwtRqU-unsplash.jpg';


export default class Blog2 extends Component {
  render() {
    return (
      
       <div className="blog"> 
          <section className="blogTop" id="Image4" style= {{backgroundImage: `url(${Blog4Image})`}}> </section>
          
          <section className="blogBottom">
            
        <h1 ></h1>
        <time datetime="2022/08/17">Posted </time>
        <p> Author: Oratile Tlhabanyane</p>

        <p>
     

        </p>
    

        <p>
    
        </p>
    
        <p>
    
        </p> 
        
        <p>
    
        </p>
    
        <p>
    
        </p>
        <p><strong> words</strong></p>
          </section>
      </div>
    )
  }
}