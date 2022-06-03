import React, { Component } from 'react';
import "../styles/BlogText.css";
import "../styles/Blogs.css";
import Blog6Image from '../assets/animal3.jpg';
import {Link} from 'react-router-dom';


export default class Blog6 extends Component {
  render() {
    return (
      
       <div className="blog"> 
          <section className="blogTop" id="Image6" style= {{backgroundImage: `url(${Blog6Image})`}}> </section>
          
          <section className="blogBottom">
            
        <h1 >Assignment Reflections</h1>
        <p> Author: Oratile Tlhabanyane</p>
        <h2> Assignment 1</h2>
        
<section>
        <p>
         
        </p>
    
 <br/>
        <p >

        </p>
<br/>

</section>
<section>
<h2>Assignment 2</h2>
        <p>
            This assignment submission we were required to focus more on our Internet Artwork. We were also given a list of items we should include in our websites. This
            assignment had to be one of my hardest in regards to the technical side of it. I will be discussing the challenges i encountered and some moments of success.

   </p>

    
        <p>
            My initial idea was create a one page application website where all the information of the website is just on one page and there wont be a lot of reloading for the user. 
            Therefore, i had to be careful of how i layout my website in order to create a good user experience. So i first started with my navigation. I wanted when use user to be able 
            scroll to a specific section when the press a specific button on the Navbar. E.g if user presses blogs, the website will scroll on click to the blogs section without them having to use the
            scroll bar or their mouse scroller to get the the 'blogs' section. However, I had an issue with the Navbar not sticking to the top of this screen, this then affects the user experience
            I wanted to create in regards to easy scrolling because they are going to have to scroll back to homepage in order to use the NavBar again. I had another issue with my 'scroll to section' function again.
            I wanted the 'blogs' section to make the buttons also scroll to a specific blog on that page but the button on the 'blogs' section did not work, this is just pure logic i need to figure out. The following significant 
            issue I ran into is the Popup component. I saw that my scrolling effect did not work for my blogs so decided to instead make the blogs pop up on the screen on the user clicks on them but the only issue came when my close button did not want to work. 
     </p> 
        <br/>
        <p>
           In regards, to my Internet Artwork, I am also not happy with it because my website was my art and it did not go as well as I expected it to but i have expressed all my views in the regards to it. 
           Make sure you check my previous blog. My design section just didnt want to show my wireframess images but i think it is just an HTML thing that i just have to fix and use Reactjs
       </p>
    <br/>
        <p>
    Overall the theory side of the assignment, I honestly did not pay attention to because I was really struggling with the techinical side. I submitted late because my website just didnt want to push my changes and deploy because of authentication error that 
    I just could not figure out in time but I eventual found a blog that helped me with my error and be able to submit my assignment eventually. However, I had communicated with my teachers just to give them a heads up.
        </p>
        </section>
        <p><strong> words</strong></p>
          </section>
      </div>
    )
  }
}