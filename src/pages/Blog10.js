import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";
import {Link} from 'react-router-dom';


export default class Blog4 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
       <button> <Link to ="/Blog3">PREVIOUS</Link></button>  <button> <Link to ="/Blogs">BLOG PAGE</Link></button> <button> <Link to ="/Blog5">NEXT</Link></button>
    <main>
    <div className="parchment"></div>
<section className="contain">
<h1 className="inkTitle">Internet Artwork - Edited Preparatory work</h1>
<p id="labarum"></p>
<p>
I have decided to change my overall theme for website. I had previously had an ocean themed website and this theme was really hard to 
execute creatively. It was either looking like an informatic website about ocean creatures or looking like a normal website about water. 
This made it had for to execute a good internet artwork and provide a well-executed internet art website that connected with actual internet 
artwork. I had noticed my use of colours, fonts and interactivity were not giving representing my initial theme. The website looked quite 
generic, and I only used images and videos in a simplistic way and not creatively. Therefore, I decided to change my theme and make it on 
Renaissance artwork. I have had a great interest in The Renaissance and the art that was created around those times. 
   </p> 

      <p>
      Renaissance art had a unique style throughout the paintings, sculptures, etc. Famous Renaissance artists that many would know are
      Leonardo Da Vinci who made the famous Mona Lisa and Michelangelo who sculpted the David. The artwork during this time had a great 
      influence of the Catholic Church and this is seen in pieces such as The Last Supper and Pietà. According to the article of Renaissance 
      art on History, many of artworks that we love and admire today “were seen and used mostly as religious souvenirs”(Editors n.d.)
  </p>

  <p>
  The four characteristics of Renaissance art that I found during my research are the following: “revival of classical Greek or Roman art 
  forms and styles, humanism, the mastery of illusionistic painting techniques (maximizing ‘depth’ in a picture which includes linear 
  perspective, foreshortening and quadrature and lastly naturalistic realism of faces and figures”(“Renaissance Art: History, Characteristics” n.d.). 
  Therefore, for my internet artwork I want to be able to capture a collage of renaissance art pieces. 
</p>

 <p>
 I want to be able to make this art pieces be interactive and have the user ‘build’ or make their own digital renaissance art piece. 
 I am looking to make use of images of two art paintings and an image of one sculpture. I want to take these three art pieces and divide 
 them into squares and have the users build their own hybrid renaissance artwork. I have attached a few images I would use to compile the 
 art piece. The interactivity will make use of the drag and drop method for the building of the artworks.
</p>
<p>
I decided to choose two Renaissance artworks, one image of a sculpture and the other of a painting. I have decided to use the sculpture of 
David and a painting of Raphael. I used a tool called IMGOnline where it slices these images evenly (“Cut photo into equal parts online - IMG online” n.d.).
 After that, I followed a tutorial on drag and dropping and added my slices images. The user then can either try to put the pieces together 
 and create the completed artwork or they can make their own complicated mess. In this interactive art piece, I didn’t want to overthink it 
 too much, I wanted the user to have fun with the piece and not try and figure out the deeper meaning to the art piece. I want them to interact with a 
 Renaissance artwork in a unique way. 
</p>
      <p><strong> 537 words</strong></p>
      <h2>Bibliography </h2>
     
      
      <ul> 
      Editors, H com. n.d. Renaissance Art. Available from: https://www.history.com/topics/renaissance/renaissance-art [Accessed 22 June 2022].

Renaissance Art: History, Characteristics. n.d. Available from: http://www.visual-arts-cork.com/renaissance-art.htm#characteristics [Accessed 22 June 2022].


Cut photo into equal parts online - IMG online. n.d. Available from: https://www.imgonline.com.ua/eng/cut-photo-into-pieces.php [Accessed 24 June 2022].




    </ul> 
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