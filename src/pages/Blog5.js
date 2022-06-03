import React, { Component } from 'react';
import "../styles/BlogText.css";
import "../styles/Blogs.css";
import Blog5Image from '../assets/animal1.jpg';
import Animal1 from '../assets/animal1.jpg';


export default class Blog5 extends Component {
  render() {
    return (
      
       <div className="blog"> 
          <section className="blogTop" id="Image5" style= {{backgroundImage: `url(${Blog5Image})`}}> </section>
          
          <section className="blogBottom">
            
        <h1 >nternet Artwork Prototype - Detailed Discussion and Future Developmen</h1>
        <p> Author: Oratile Tlhabanyane</p>

        <p>
            I have created an Internet Art Piece through my entire website.The goal for this artpiece is for it to combine the conventions of a website and the art of animation together.
            The initial idea during our preparatory work for the internet artwork was to look at the wonders of the ocean. This internet artwork aims to 
            make use of ocean background noise, ocean creatures sound effects, animated waves through interactivity. There are a few things I got to excecute and a few things I was able to.
            This discussion will be looking at the different obstacles, Internet Art inspirations and a few interations I will be making going forward. 

        </p>
    
 <br/>
        <p >
 Firstly, I would like to start by discussion my difficulties and the different technical issues that I encountering during the implementation phase.
 As I mentioned above, I wanted to create an ocean animated website. Therefore, I had to create animated ocean buttons, animated ocean background so whenever the user
 interacts with the scrolling element they would trigger the waves in the background to move. I had to also create a 360 video experience to give the viewer of the artwork
 a pause in the website artpiece and give them an experience of being under the ocean by using the drag option to look around the ocean in a 360 degree view. 
    
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