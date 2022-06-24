import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog4 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
     
       <button> <Link to ="/Blog9">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> 
    <main>
    <div className="parchment"></div>
<section className="contain">
<h1 className="inkTitle">Internet Artwork - Edited Preparatory work</h1>

<p id="labarum"></p>
<p>
<h2>Inspiration</h2>
The idea I have for my website is for it to feel like the user is under the ocean. I have quite a huge interest in deep sea creatures and 
the ocean entirely. I want my website to embody the elements of the sea and its creatures. Having to execute a website to look and feel 
like a nature element is a bit tricky because it could either be hit or a miss. However, I want to be able to interpret the ocean through 
interaction whether through animation and sound, exhibiting sea creatures through the colours of pages for example, each page will represent 
a sea creature whether through page theme or layout.  

   </p> 

      <p>
     <h2>Research</h2> 
My first thought when it came to my different pages is for them to carry individual themes but have an overall theme for the website. 
What I mean by that is that my overall theme for my website is the ocean and each page will have a theme represent a specific sea creature. 
I did research on the specific deep-sea creatures I wanted to use for my individual pages, and I got a bit frightened by the images I found.
 Look at figure 1.1 and figure 1.2 as examples of the deep-sea creatures I found. I do not want my users to experience a sense of fear and t
 ension during their interaction with my website, so I decided just to focus on normal sea creatures. I want my users to experience 
 relaxation and peace when interacting with my website from the background sound of the ocean to the smooth animation transition of different water elements. 
 </p>

  <p>
  The four characteristics of Renaissance art that I found during my research are the following: “revival of classical Greek or Roman art 
  forms and styles, humanism, the mastery of illusionistic painting techniques (maximizing ‘depth’ in a picture which includes linear 
  perspective, foreshortening and quadrature and lastly naturalistic realism of faces and figures”(“Renaissance Art: History, Characteristics” n.d.). 
  Therefore, for my internet artwork I want to be able to capture a collage of renaissance art pieces. 
</p>


      <p><strong> words</strong></p>
   
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