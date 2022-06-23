import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";



export default class Blog2 extends Component {
  
  render() {

  return (
    <div className="homeContent" >
       
      
    <main>
<div className="parchment"></div>
<div className="contain">
<h1 className="inkTitle">Design and Aesthetics</h1>
<p id="labarum"></p>
<p>
    This blog will be looking into what the core principles of design and aesthetics for the web are and critically discuss these principles. The 9 principles of good web design according to a blog on Feeling Peaky by Marianne are: Website Purpose, Simplicity, Navigation, F-shaped pattern of reading, Visual Hierarchy, Content, Grid Based Layout, Load Time and Mobile Friendly(Marianne 2021). These principles are quite easy to understand even without further explanation. I am going to discuss the core principles of design and aesthetics of the web by using Feeling Peaky website as an example, looking into theoretical framework such as The Role of Aesthetics in Web Design by Lisbeth Thorlacius as reference for my blog. </p>


    <p>
    The content on this blog overall is easy to absorb, aesthetically pleasing and simultaneously obeys to one of the principles which is Content by Marianne “creating good content that has turned me into a customer by using this blog as reference for my blog”. The design of a website should be aesthetically pleasing to enable effortless interaction. However, good aesthetics does not mean great functionality when it comes to interaction. According to Thorlacius, functionality’s main objective is “to create effective websites where the user quickly and efficiently can obtain the desired pieces of information without being delayed by long downloading times or blind alleys when navigating on the site” (Thorlacius 2007).  </p>
   
    <p>
    This collaborates to one of Marianne’s principles of good design which talks about how visitors should not be waiting more than 2 seconds to get the information that they have requested for during their interaction with the website. Aesthetics do play a part in functionality because of visual communication. From, font, imagery to placement of layout, visual communication plays an important role in functionality as it makes the website easy to interact because of the aesthetics. When I mention aesthetics I am mainly looking aspects such as “colours, typography, design, pictures, video clips, flash animations, etc” (Thorlacius 2007). Graphic design is so important when it comes to visual communication which enables functionality of the website.</p> 
   
    <p>
    For example, Feeling Peaky website, where I found Marianne’s blog, has good visual communication which makes the website easy to navigate through. However, their loading time is bit longer than 2 seconds, this could probably be caused by the number of graphics used on their website. The infographics use on Marianne’s page are not built through SVG but instead the infographics are images which is causing the page to load longer, and this affects user interactivity. Even though the infographics present good visual communication, it hinders with one of the principles of good web design, which is Load Time, according to Marianne. I think if Feeling Peaky used SVG to build their infographics it would have helped them achieve the same goal but only faster. 
    </p>
 
    <p><strong>525 words</strong></p>
 
    <h2>Bibliography </h2>
 
    
    <ul> 
      <li>Marianne. 2021. 9 Principles of Good Web Design - read our guidelines to consider. Available from: <a href="https://www.feelingpeaky.com/9-principles-of-good-web-design/ ">https://www.feelingpeaky.com/9-principles-of-good-web-design/ </a> [Accessed 5 April 2022].</li>
      <li>Thorlacius, L. 2007. The Role of Aesthetics in Web Design. Nordicom Review. 28(1):63–76. doi.org/10.1515/nor-2017-0201.</li>

    </ul>
   
        
        <p className="cachet"></p>
<div id="signature"> <time datetime="2022/04/4">Posted , 4 April 2022</time> <br/>Author: Oratile Tlhabanyane</div>
</div>
</main>

<svg>
<filter id="wavy2">
<feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
<feDisplacementMap in="SourceGraphic" scale="20" />
</filter>
</svg>
    </div>
  );
}
}