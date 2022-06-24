import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog5 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
       <button> <Link to ="/Blog4">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button>  <button> <Link to ="/Blog6">NEXT</Link></button>  
    <main>
    <div className="parchment"></div>
<section className="contain">
<h2 className="inkTitle">Internet Artwork - Preparatory work</h2>
<p id="labarum"></p>
<p>
            I have created an Internet Art Piece through my entire website. The goal for this artpiece is for it to combine the conventions of a website and the art of animation together.
            The initial idea during our preparatory work for the internet artwork was to look at the wonders of the ocean. This internet artwork aims to 
            make use of ocean background noise, ocean creatures sound effects, animated waves through interactivity. There are a few things I got to execute and a few things I was able to.
            This discussion will be looking at the different obstacles, Internet Art inspirations and a few iterations I will be making going forward. 

        </p>
        <p >
 Firstly, I would like to start by discussion with my intention and, the difficulties and the different technical issues that I encountering during the implementation phase.
 As I mentioned above, I wanted to create an ocean animated website. Therefore, I had to create animated ocean buttons, animated ocean background so whenever the user
 interacts with the scrolling element they would trigger the waves in the background to move. I had to also create a 360 video/movie experience to give the viewer of the artwork
 a pause in the website artpiece and give them an experience of being under the ocean by using the drag option to look around the ocean in a 360 degree view.
 This was going to be executed through a One Page Application. The reason for the One Page Application was that I wanted to portray the art piece as one piece but also 
 be able to create the feeling of going deeper into the ocean as you scroll down on the website. The initial idea of this One Page Application was to have the audience 
 be introduced to 'ENTERING THE OCEAN' through the use of a water splash to indicate the 'diving' into the ocean by the reader, the middle content was meant to show the different deep-sea creatures 
 the deeper the user scrolled through the One Page Application/Website and at the end of the art piece/website have the 360 degree interactive video/movie experience taking place.
 I will admit, this vision was very simple but quite challenging to implement.

        </p>

        <p>
    I had first found it difficult to find videos on how to animate backgrounds. I was going to somehow figure out a way to animate the background the be waves. However, I could only find videos on how to
    create parallax backgrounds. Parallax background is essentially a background that consists of broken up images that sit in a vector, the movement of these images are seen though the scrolling of the user. Here is 
    an example of a parallax background   <a href="https://images.app.goo.gl/4SQv1fBpRc61Xoie7">https://images.app.goo.gl/4SQv1fBpRc61Xoie7</a>. This was not the vision I had because these parallax backgrounds look very animated and 
    I wanted a realistic moving ocean background. So I had to resort to using short videos, the first one was to show the 'diving into the ocean' using a video of paint going in water, going forward with the middle of 
    art piece i need to make sure that the background colour is consistent to give the impression of within one ocean throughout the website. However, this consistency of the background was a bit hard as well because 
    I could not find videos of ocean and the sea creatures that had very very similar colour backgrounds of the ocean. Therefore, the piece didn’t have that consistent ocean flow and wave animation scrolling during the viewing of the piece.
    Those two challenges were the most disappointing ones because if it had come out the way I had envisioned then maybe it would have looked like such beautiful long strip of an interactive visual ocean, now I just feel like it looks like a regular long page web art.
    The third challenge I had encoutered was the implementation of the 360 video/movie experience at the end of the website, when the viewer has reached the "deep end of the ocean". I wanted the 360 image to be full screen when it got to the bottom 
    so that the viewer has no other distractions from the website when they are experiencing the interactive video/movie experience. However, once again I was not able to find tutorials that could help me implement this idea but i had attempted and it would’ve been a cool aspect to have.    
    </p>


        <p>
     During the semester we encountered themes such as  Internet, Society and Design Justice and I wanted to incorporate these themes in my art piece in some sort of way. I did not want to artpiece to bring debates and have the 
     audience try and interpret their on views on it or try to create their own story from the internet artwork. You can see read more about these three themes on my previous blogs. I just wanted to bring the two simple elements of internet artwork which is 
     design and the actual internet web. This will then not create any sort of debates of justice driven topics but instead just be an artpiece that presents its story as it is when you first view it. 
        </p> 
        
        <p>
    I think one thing I would have done different in the overall design of my ocean web art, I would probably separate the ocean piece to the website. I thought I could combine the two conventions of website and elements of the ocean to create a
    long, deep art piece but that was not possible. In my next iteration I am going to make the section where the user can specifically find the ocean art piece, but it won’t be merged the website but instead it will be another element to the website. 
    Based on my inability to find tutorials about how to animate using React.js, I will probably create my own animation resources, such as backgrounds, buttons, etc, on a separate platform like Blender and just implement the resources from there.  
        </p>

      <p><strong>900 words</strong></p>
   
        <p className="cachet"></p>
<section id="signature"> <time  datetime="2022/06/03"></time>Signed, 3 June 2022 <br/>Author: Oratile Tlhabanyane</section>
</section>
</main>

<svg>
<filter id="wavy2">
<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
<feDisplacementMap in="SourceGraphic" scale="20" />
</filter>
</svg>
    </article>
  );
}
}