import React, { Component } from 'react';
import "../styles/OldPaperTexture.css";



export default class Blog3 extends Component {
  
  render() {

  return (
    <article className="blogContent" >
       
      
    <main>
<element className="parchment"></element>
<section className="contain">
<h1 className="inkTitle">Internet, Society and Design Justice</h1>
<p id="labarum"></p>
<p>
      To start my discussing I am going to start by giving my view of the issues around the internet, society, and design justice for the web. 
      A person could never think there could ever be inequality or even any sort of injustice when it comes to digital world. 
      However, what we forget as humans as how we influence technology and the internet. These two aspects are influenced by our own judgements 
      and these judgements/views are seen through their design. No matter how hard we try to make the digital space neutral, as it aims to be, 
      there will always be underlying issues on inequality in the design based on the fact it is designed/created by humans. </p>

      <p>
      During one of our lectures on Internet, Society and Design Justice, we were given a diagram, which is on figure 0.1, 
      where it shows a security scan that would usually be at an airport check in point. This image shows yellow areas which 
      highlight each gender’s private areas that differentiates them from male to female. As you can see the image, the scan is 
      quite discriminatory. This design was done “through the combination of user interface (UI) design, scanning technology, 
      binary-gendered body-shape data constructs, and risk detection algorithms, as well as the socialization, training, and experience 
      of the TSA agents.”(Costanza-Chock n.d.) </p>
      
      <section className='image' style= {{backgroundImage: `url(${Image})`}}> </section>
    
      <p>
      In Sasha Costanza-Chock’s reading Design Justice, she mentions how she identifies as a nonbinary trans femme. 
      In this society, the LGBTQI+ community has bloomed more in the century and could be encountering such discriminatory 
      technologies during their day-to-day lives. In Constanza-Chock example, she describes how the scan could identify as both female and 
      male, so she had to go through another physical scan step because the machine marked her as a “risk”. 
      </p> 
      <p>
      So, I just wanted to understand what the purpose of these TSA’s technology is for wanting to know if the individual going through it 
      either male or female and according to my research the purpose of a full body scan is to see any suspicious items that may be carried 
      on the person’s body. An article titled “The TSA’S Technology is discriminating against trans people” by Emma Eisenberg, 
      states whether as a trans individual you are give an option for a scan or pat down, you still end up misgendering yourself 
      because you are still only given two options of male or female (Eisenberg, 2019) . The software used by these machines is where the 
      design issue is, the software called the ATR. The simplest way forward is just to update the software to accommodate non-binary 
      individuals. However, the implementation for this updated software is where we need to hold the TSA accountable because you can 
      say that you are aware of your systems being binary and are working towards updating the software but apparently “the technical 
      challenges for ATR are enormous; it is very difficult to write software that comes anywhere near the capabilities of human observers” (Eisenberg, 2019). 
      </p>
      <p><strong>565 words</strong></p>
      <h2>Bibliography </h2>
     
      
      <ul> 
        <li>Costanza-Chock, S. n.d. Design Justice: Community-Led Practices to Build the Worlds We Need. 358.  [Accessed 18 April 2022].</li>
        <li>The TSA’s Technology Is Discriminating Against Trans People - Pacific Standard. n.d. Available from: <a href="https://psmag.com/social-justice/tsa-technology-is-discriminating-against-trans-people">https://psmag.com/social-justice/tsa-technology-is-discriminating-against-trans-people</a> [Accessed 18 April 2022].</li> 
      </ul> 
        <p className="cachet"></p>
<section id="signature"> <time  datetime="2022/04/18">Posted , 18 April 2022</time> <br/>Author: Oratile Tlhabanyane</section>
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