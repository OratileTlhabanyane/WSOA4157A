import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog8 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
      
       <button> <Link to ="/Blog7">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> <button> <Link to ="/Blog9">NEXT</Link></button>
    <main>
    <div className="parchment"></div>
<section className="contain">
<h1 className="inkTitle">Technical Reflection</h1>

<p id="labarum"></p>
<p>
I always put more focus on the technical component of all my submissions because it will be pointless having all the blogs and creative ideas 
done and implemented but the users cannot see it because the website is not functional. In my exam submission, I had tried to split my time 
towards all the components required for the website in an evenly manner but once again I ran into a lot of technical errors which needed me to focus more on them. 
   </p>

      <p>
      In the beginning of the development of my exam website, I had run into a Visual Studio Code issue. My VS code had suddenly started being 
      extremely slow which affected my overall progress. I had tried to inform my lecturers to get assistance, but I did not get a reply 
      and I tried googling all possible solutions. I then decided to completely delete VS code entirely ans reinstall it and this fixed the delay. 
  </p>
  

<p>
One thing I struggle with is deployment, I always get different types of errors during the last minutes of each
due date of each assignment. Therefore, I decided that I would deploy my website during the development process. Even though I will be deploying bits and 
bits of small changes of my website, I will have enough time to solve any deployment errors that I may run into and do it in time. So far, 
this method has worked perfectly, and I have not run into any deployment issues. 
   </p>

      <p>
      The technical feedback I received for my assignment two was that I needed to use more microformatting, more semantic markups and just 
      clean up code. Interactive media last year we were taught that we should not use div tags at all because some computers will not read our 
      applications correctly, so we need to make use of semantic markups. I then got confused when we were given a lecture on React js 
      where we were using div tags so I didn’t know when exactly should we use semantic markups and not. 
      However, I was able to remove most of my div tags and use more semantic markups in my website. 
  </p>
  <p>
  I had noticed that I am really not familiar with a lot of coding terms. Is it possible if I could request that we get more technical 
  classes and technical tutorial classes where we are taught specific things? For example, one week we would like how to improve 
  responsiveness, the next week we learn how to use Reactjs to create cool animation effects/transitions, or even have classes that 
  focus strictly on improving use CSS, html, JavaScript, React, all separated? It is really having to rely mostly on YouTube tutorials and 
  Stack Overflow on how to build a website, I am nervous to go into the workspace next year as junior front end developer that isn’t 
  comfortable with coding.
  </p>
      <p><strong>464 words</strong></p>
      <h3>Bibliography </h3>
    
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