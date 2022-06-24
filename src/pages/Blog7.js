import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog7 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
     
       <button> <Link to ="/Blog6">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> <button> <Link to ="/Blog8">NEXT</Link></button> 
    <main>
    <div className="parchment"></div>
<section className="contain">
<h2 className="inkTitle">Asssignment 2 Reflection</h2>
<p id="labarum"></p>
<p>
This assignment submission we were required to focus more on Website and Fully Functional Prototype of Internet Artwork. 
Thus, making using of required blogs posts for content, UI/UX components for aesthetics design and a good use of React.js 
for our technical component.  This assignment had to be one of my hardest in regard to the technical side of it. 
I will be discussing the challenges I encountered and some moments of success. I also had great difficulty implementing 
my internet artwork idea. 
   </p>

      <p>
      My initial idea was to create a one-page application website where all the information of the website is just on one page and 
      there won’t be a lot of reloading for the user. I had requested for help from one of my lecturers, but I did not get a reply, 
      so I had spent a lot of time with my technical component trying to figure out the implementation of a one-page application. 
      Therefore, I ended rushing through my blogs. I did not do best with my Blog 4 till Blog 6 because I was trying to implement my 
      idea and not have errors to my website functionally. 
  </p>
  

<p>
So, I first started with my adjusting my navigation. I had adjusted my navigation bar and added a Scroll Effect component. 
I had placed all of my content on one-page and divided them in sections so whenever a user clicks on any option on the navigation bar 
it will scroll to that requested section. Therefore, to manage effective navigation of the one pager I wanted to add a ‘scroll back up” button 
and also have the navigation bar stick to the top of the screen. 
   </p>

      <p>
      The ’scroll back up’ button would allow the user to scroll back up to home, about, design, internet artwork section without having 
      them use the scroll bar to get to a specific section. For example, if user presses blogs, the website will scroll to the blogs section 
      without them having to use the scroll bar or their mouse scroller to get the 'blogs' section. This button worked partially well but 
      I had an issue with the Navbar not sticking to the top of this screen, this affected my overall user experience that I was trying to 
      achieve with my navigation. The following significant issue I ran into is the Popup component. 
      I saw that my scrolling effect did not work for my blogs so decided to instead make the blogs pop up on the screen on the user clicks 
      on them, but the only issue came when my close button did not want to work to return to the page.
  </p>
  <p>
  To moreover, I had to write 4 blogs for assignment 2. These blogs were rushed because I ran into multiple issues that I was not assisted in. 
  However, I was able to submit 3 of the blogs. I did not submit my Assignment 1 Reflection because I honestly just ran out time. 
  In regards, to my Internet Artwork, I am also not happy with it because my website was my art, and it did not go as well as I expected it
   to but I have expressed all my views in the regards to it. Make sure you check my previous blog. My design section just didn’t want to 
   show my wireframes images but i think it is just an HTML thing that I just must fix and use React.js
</p>
<p>
Overall, the theory side of the assignment, I honestly did not pay attention to because I was really struggling with the technical side. 
I submitted late because my website just didn’t want to push my changes and deploy because of authentication error that I just could not 
figure out in time but I eventual found a blog that helped me with my error and be able to submit my assignment eventually. 
However, I had communicated with my teachers just to give them a heads up and requesting for help, but I still didn’t get assisted with it. 
I was able to get a Stack Overflow forum that helped me deploy my website and get it marked. 
</p>
      <p><strong>680 words</strong></p>
  
        <p className="cachet"></p>
<section id="signature"> <time  datetime="2022/06/22"></time>Signed, 22 June 2022<br/>Author: Oratile Tlhabanyane</section>
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