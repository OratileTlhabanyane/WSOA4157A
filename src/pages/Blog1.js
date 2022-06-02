import React, { Component } from 'react';
import Blog1Image from '../assets/mathieu-chirico-CfXZS5mFQhY-unsplash.jpg';
import '../styles/Popup.css'
import Popup from '../components/Popup'
import {Link} from 'react-router-dom';


export default class Blog1 extends Component {
  
  render() {

  return (

    <div className="blog">
      


      <div className="blogTop" id="Image1" style={{ backgroundImage: `url(${Blog1Image})` }}> </div>

      <section className="blogBottom">
  <br/>
     

        <h1>Short Critical Analysis on a Net/Web Artwork  
   
       </h1>
        <time dateTime="2022/03/14">Posted , 14 March 2022</time>
        <p> Author: Oratile Tlhabanyane</p>
        <br />
        <p>
          For this week’s short critical analysis is going to be looking at Joe Hamilton’s net artwork series titled Indirect Flights.This art series what looks like a collage of images, images that Hamilton took during his trips to Europe, Asia, and the Middle East(“Indirect Flights - Joe Hamilton” n.d.).According to the article on Google Arts & Culture, the website which hosts this artwork, Indirect.flights, is navigated in like an ordinary Google Map (“Indirect Flights - Joe Hamilton” n.d.).This meaning that the scrolling of the artwork is parallax.This digitally layered topography was created during the year 2014 (“What is Topography?The Definitive Guide - GIS Geography” n.d.).
        </p>
        <br />

        <p>
          The one thing that attracted me to Indirect Flights and what made me choose it for my analysis is how Hamilton brought depth to a collage.He didn’t just do through the use of different layers but also through the different speeds that the layers move.Hamilton created this great depth illusion and the choice of parallax scrolling also made this piece feel realistic.This piece uses satellite images, paint brush textures, Hamilton’s photography where layers and revealed and concealed as one scroll through the website.I think one thing I was expecting when I landed on the website was to get interactivity on the actual pieces of images and textures presented, I expected to be able to zoom in and out of the composition.However, that was not the case but instead Hamilton gave use a bar at the left bottom of the screen to click which showed the 10 different perspectives of the section of the art piece.
        </p>
        <br />
        <p>
          Hamilton created a net artwork; net art is “a site-specific art form bound to its own presence and impact on the Internet”(“What is net art?” n.d.), which illustrated original forms of art which is collaging even though net art is revolutionised visual art.In Carrier’s article titled The Work of Art in the Age of the Internet, discusses the two ways that were brought by reproduction of visual art, and I want to look at specifically the one aspect which looks at the “destruction of the aura of a unique original artwork leads to its effective replacement by multiple copies” (Carrier, 2020).Though Indirect Flights’ medium is the internet, Hamilton has found a way in keeping the traditional aspects of collaging which is taking several photographs where you attach even textures such as fabric and wood.Hamilton instead uses pictures of different textures which brought a “flat surface to life” he deconstructed the aura of collaging but still kept the essence of its uniqueness in his medium, a revolutionised medium.
        </p>
        <br />
        <p><strong>519 words</strong></p>
        <br />
        <h2>Bibliography </h2>
        <br />

        <ul>
          <li>Indirect Flights - Joe Hamilton.n.d.Available from: <a href="https://artsandculture.google.com/asset/indirect-flights-joe-hamilton/mAGK9-LDjcjHVg">https://artsandculture.google.com/asset/indirect-flights-joe-hamilton/mAGK9-LDjcjHVg</a> [Accessed 13 March 2022].</li>
          <li>What is net art?n.d.Available from: <a href="https://netspecific.net/en/netspecific/what-is-net-art">https://netspecific.net/en/netspecific/what-is-net-art</a> [Accessed 13 March 2022].</li>
          <li> What is Topography? The Definitive Guide - GIS Geography. n.d. Available from: https://gisgeography.com/what-is-topography/ [Accessed 13 March 2022].</li>
          <li>Carrier, D.(2020).The Work of Art in the Age of the Internet.Hyperallergic.Available at: <a href="https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/">https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/</a> [Accessed 13 March 2022]</li>

        </ul>

      </section>
    </div>
  );
}
}

