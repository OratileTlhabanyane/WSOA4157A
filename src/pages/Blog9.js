import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog9 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
     
       <button> <Link to ="/Blog8">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> <button> <Link to ="/Blog10">NEXT</Link></button> 
    <main>
    <div className="parchment"></div>
<section className="contain">
<h1 className="inkTitle">Design Reflection</h1>

<p id="labarum"></p>
<p>
This exam submission we were offered the chance to be able to do a design reflection where we look at the design process we went 
through when creating our websites. For our final website submission we were required to look at UX/UI, design, and aesthetics. 
So, I will be discussing my design process through these 3 aspects mentioned. 
   </p>

      <p>
      Firstly, in my previous assignment submission I had a bit of a struggle when it came to my navigation. 
      I had tried to make my website to be a one-pager application to reemphasize my theme which was ‘deep in the ocean’ and by using the scroll effect and 
      pop up methods as components I decided to change my navigation. However, these two methods did not go as planned technical wise, so it affected my user experience. 
      The user was not able to click on a blog and have it pop up on their screen which resulted them to scroll throughout the entire
      website one-page application to look for the next blog. The scroll effect which allowed the user to scroll to different sections of the website effortlessly did not work.
      Therefore, I had to change my one-page application back to multiple pages to regain my good navigation. 
      This helped fix the issue I had where users found it hard to find the 
      next blog. This made my communication to my user clear and reachable. To improve my accessibility even further I added next and 
      previous buttons on each blog in order to have the user go to my next blog effortlessly without having to go back to blog page 
      and look for the next blog. 
  </p>
  

<p>
Moreover, because I had changed my theme from deep ocean to Renaissance, so it made me change my wireframes, 
style guides and my internet artwork. My website went from black, blue, and white to black, neon colours and white. 
When it came to my colour scheme, I had a look at three options because I was deciding if I wanted the colours that represent typical 
Renaissance art paintings, these being colours that are a bit duller and pastel or go for a colour scheme that is bright and represent the 
digital touch of 'internet art'. Therefore, I decided on a neon colour scheme. In regards, to my readability and legibility, 
I had received feedback from my previous assignment that my font on big screens gets too small, I do not how to test and see this error in order to fix it 
because I don’t have a big screen other than my laptop. However, when testing responsiveness of my font on my laptop, the font was big give enough for phones and iPads.
   </p>

      <p>
      However, looking at my overall website aesthetics I wanted to create a minimalistic homepage with a collage that consists of different 
      Renaissance artworks so that the user knows exactly what my theme is when they land on my website. I tried to make my homepage look a bit 
      interesting so I followed an interesting animation effect collage tutorial and it helped me to get an interesting user experience when 
      the user hovers on each image. I wanted to keep my design with the rest of my pages simplistic and as well as keep the interactivity simple
  </p>
      <p><strong> 468 words</strong></p>
  
        <p className="cachet"></p>
<section id="signature"> <time  datetime="2022"></time> <br/>Author: Oratile Tlhabanyane</section>
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
