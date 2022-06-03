import React, { Component } from 'react';
import "../styles/BlogText.css";
import "../styles/Blogs.css";
import Blog4Image from '../assets/naomi-tamar-u1iIIQwtRqU-unsplash.jpg';
import Animal1 from '../assets/animal1.jpg';


export default class Blog4 extends Component {
  render() {
    return (
      
       <div className="blog"> 
          <section className="blogTop" id="Image4" style= {{backgroundImage: `url(${Blog4Image})`}}> </section>
          
          <section className="blogBottom">
            
        <h1 >Internet Artwork - Preparatory work</h1>
        <p> Author: Oratile Tlhabanyane</p>

        <p>
        Inspiration
The idea I have for my website is for it to feel like the user is under the ocean. I have quite a huge interest in deep sea creatures and the ocean entirely. I want my website to embody the elements of the sea and its creatures. Having to execute a website to look and feel like a nature element is a bit tricky because it could either be hit or a miss. However, I want to be able to interpret the ocean through interaction whether through animation and sound, exhibiting sea creatures through the colours of pages for example, each page will represent a sea creature whether through page theme or layout.  

        </p>
    
        Research
My first thought when it came to my different pages is for them to carry individual themes but have an overall theme for the website. What I mean by that is that my overall theme for my website is the ocean and each page will have a theme represent a specific sea creature. I did research on the specific deep-sea creatures I wanted to use for my individual pages, and I got a bit frightened by the images I found. Look at figure 1.1 and figure 1.2 as examples of the deep-sea creatures I found. I do not want my users to experience a sense of fear and tension during their interaction with my website, so I decided just to focus on normal sea creatures. I want my users to experience relaxation and peace when interacting with my website from the background sound of the ocean to the smooth animation transition of different water elements. 

        <p style= {{Image: `url(${Animal1})`}}>
 
    
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