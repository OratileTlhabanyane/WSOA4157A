import React, { Component } from 'react';
import "../styles/Home.css";
import "../styles/OldPaperTexture.css";
import HomepageBanner from '../assets/matty-adame-MSD_DtDcCQo-unsplash.jpg';
import {Link} from 'react-router-dom';
import video from '../assets/video.mp4'


export default class Home extends Component {
  render() {
   
return (
      <div className="homeContent" >
       
      
             <main>
  <div className="parchment"></div>
  <div className="contain">
		<p className="inkTitle">In hoc Signo vinces</p>
    <p id="labarum"></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.</p>
<p>Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue. Integer id felis. Curabitur aliquet pellentesque diam. Integer quis metus vitae elit lobortis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi vel erat non mauris convallis vehicula. Nulla et sapien. Integer tortor tellus, aliquam faucibus, convallis id, congue eu, quam. Mauris ullamcorper felis vitae erat. Proin feugiat, augue non elementum posuere, metus purus iaculis lectus, et tristique ligula justo vitae magna.</p>
    <p className="cachet"></p>
    <div id="signature">Imperator Caesar Flavius Constantinus<br />Pius Felix Invictus Augustus</div>
  </div>
</main>

<svg>
  <filter id="wavy2">
    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1" />
    <feDisplacementMap in="SourceGraphic" scale="20" />
  </filter>
</svg>

           
          </div>
        
    
    )
  }
} //<video src={video} autoPlay muted/> 
