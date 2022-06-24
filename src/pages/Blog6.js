import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog6 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
   
       <button> <Link to ="/Blog5">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> <button> <Link to ="/Blog7">NEXT</Link></button>   
    <main>
    <div className="parchment"></div>
<section className="contain">
<h2 className="inkTitle">Edited Asssignment 1 Reflection</h2>
<p id="labarum"></p>
<p>
During my process of creating assignment 1, we had to submit our blogs on our functional React.js powered website. 
This was the first project I have ever created using React.js. We were presented with a lecture video that showed us how to create a basic 
website using JSX. JSX is short for JavaScript XML which allows us to write HTML in React using JavaScript code.  
In my previous year, we had been learning to code HTML and JavaScript separately, so JSX was quite an interesting thing to start learning.
   </p>

      <p>
      The React.js website lecture helped me build the skeleton of my website and it was very helpful because the lecturer was 
      explaining each step so simplicity it made it easy for me to edit the coding and customize it to my own website. 
      My number one priority during this assignment was to build a functioning website that had all its pages interactive 
      therefore I did not focus on the content other than the blogs we had to submit. Content, I mean adding information on the home page, 
      about and contact page. I was also not really focused on the creative component, I had just simply put in background images and used 
      black and white as my colour scheme just to make some sort of acceptable user experience
  </p>
  

<p>
The construction of my website was straight forward but the problem started when I had to make my website go live. 
During this process I had thought that they way we would make our websites go live on GitHub last year was the way we did it this year, 
however that was not the case. The video that we were presented also did not show that we had to deploy the website and not just push 
changes into GitHub and create a live link on GitHub settings. Instead, we were given a separate video on how to deploy and 
I had only noticed it right before submission. However, even though I went through the video which explained the process quite perfectly, 
I ran into weird errors that I did not understand but I was able to reach out to one of lecturers to try and figure. 
But I had already gotten it fixed the error before we could set up a consultation session, so I was happy. 
Stack Overflow had saved me once again. 
   </p>

      <p>
      I always find myself struggling with content creation when it comes to my websites. Last year, I also struggled with balancing blogs, 
      technical work, and creative work. I always find myself focusing more on the technical component and leave theory and creative for 
      last minute. I think therefore working in teams in the work industry makes sense because you will have someone focusing on UI/UX design,
       the other on content creation and lastly the code (which in our case would be front-end developing). Therefore, I was not able to 
       submit my design component and I didn’t really go into depth with my theory blogs. I find it difficult to engage in both technical and 
       blogs at the same time. If maybe in the future the module could offer students to work in groups to create websites and students be 
       able to focus on one aspect and master instead of doing all three would be of great help to me. 
  </p>
      <p><strong>549 words</strong></p>
   
        <p className="cachet"></p>
<section id="signature"> <time  datetime="2022/06/22"></time>Signed, 22 June 2022 <br/>Author: Oratile Tlhabanyane</section>
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