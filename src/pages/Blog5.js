import React, { Component } from 'react';
import "../styles/BlogText.css";
import "../styles/Blogs.css";
import Blog5Image from '../assets/animal1.jpg';
import Animal1 from '../assets/animal1.jpg';
import {Link} from 'react-router-dom';


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
 Firstly, I would like to start by discussion with my intentiond and, the difficulties and the different technical issues that I encountering during the implementation phase.
 As I mentioned above, I wanted to create an ocean animated website. Therefore, I had to create animated ocean buttons, animated ocean background so whenever the user
 interacts with the scrolling element they would trigger the waves in the background to move. I had to also create a 360 video/movie experience to give the viewer of the artwork
 a pause in the website artpiece and give them an experience of being under the ocean by using the drag option to look around the ocean in a 360 degree view.
 This was going to be excecuted through a One Page Application. The reason for the One Page Application was that I wanted to portay the art piece as one piece but also 
 be able to create the feeling of going deeper into the ocean as you scroll down on the website. The initial idea of this One Page Application was to have the audience 
 be introducted to 'ENTERING THE OCEAN' through the use of a water splash to indicate the 'diving' into the ocean by the reader, the middle content was meant to show the different deep sea creatures 
 the deeper the user scrolled through the One Page Application/Website and at the end of the art piece/website have the 360 degreen interactive video/movie experience taking place.
 I will admit, this vision was very simple but quite challenging to implement.

        </p>
<br/>
        <p>
    I had first found it difficult to find videos on how to animate backgrounds. I was going to somehow figure out a way to animate the background the be waves. However, I could only find videos on how to
    create parallax backgrounds. Parallax background is essentially a background that consists of broken up images that sit in a vector, the movement of these images are seen though the scrolling of the user. Here is 
    an example of a parrallax background   <a href="https://images.app.goo.gl/4SQv1fBpRc61Xoie7">https://images.app.goo.gl/4SQv1fBpRc61Xoie7</a>. This was not the vision I had because these parallax backgrounds look very animated and 
    I wanted a realistic moving ocean background. So I had to resort to using short videos, the first one was to show the 'diving into the ocean' using a video of paint going in water, going forward with the middle of 
    art piece i need to make sure that the background colour is consistent to give the impression of within one ocean throughout the website. However, this consistentcy of the background was a bit hard as well because 
    I could not find videos of ocean and the sea creatures that had very very similar colour backgrounds of the ocean. Therefore, the piece didnt have that consitent ocean flow and also wave animation scrolling during the viewing of the piece.
    Those two challenges were the most dispointing ones because if it had come out the way I had envisioned then maybe it would have looked like such beautiful long strip of the an interactive visual ocean, now I just feel like it looks like a regular long page web art.
    The third challenge I had encoutered was the implementation of the 360 video/movie experience at the end of the website, when the viewer has reached the "deep end of the ocean". I wanted the 360 image to be full screen when it got to the buttom 
    so that the viewer has no other distractions from the website when they are experiencing the interactive video/movie experience. However, once again I was not able to find tutorials that could help me implement this idea but i had attempted and it wouldve been a cool aspect to have.    
    </p>

    
        <p>
     During the semester we encoutered themes such as  Internet, Society and Design Justice and I wanted to incorporate these themes in my artpiece in some sort of way. I did not want to artpiece to bring debates and have the 
     audience try and interpret their on views on it or try to create their own story from the internet artwork. You can see read more about these three themes on my previous blogs. I just wanted to bring the two simple elemenets of internet artwork which is 
     design and the acutal internet web. This will then not create any sort of debates of justice driven topics but instead just be an artpiece that presents its story as it is when you first view it. 
        </p> 
        <br/>
        <p>
    I think one thing I would have done different in the overall design of my ocean web art, I would probably seperate the ocean piece to the website. I thought I could combine the two conventions of website and elements of the ocean to create a
    long, deep art piece but that was not possible. In my next interation I am going to make the section where the user can specifically find the ocean artpiece but it wont be merged the website but instead it will be another element to the website. 
    Based on my inability to find tutorials about how to animate using React.js, I will probably create my own animation resources, such as backgrounds, buttons, etc, on a seperate platform like Blender and just implement the resources from there.  
        </p>
    
        <p>
    
        </p>
        <p><strong> words</strong></p>
          </section>
      </div>
    )
  }
}