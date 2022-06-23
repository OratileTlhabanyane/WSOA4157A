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
  
   </p>

    
        <p>
</p> 
        <br/>
        <p>
  
  
   </p>
    <br/>
        <p>
     </p>
        </section>
        <p><strong> words</strong></p>
          </section>
      </div>
    )
  }
}