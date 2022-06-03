import React, { Component } from 'react';
import {Blogs1} from '../Assistance/BlogsList.js';
import {Blogs2} from '../Assistance/BlogsList.js';
import {Blogs3} from '../Assistance/BlogsList.js';
import {Blogs4} from '../Assistance/BlogsList.js';
import {Blogs5} from '../Assistance/BlogsList.js';
import {Blogs6} from '../Assistance/BlogsList.js';
import BlogsItem from '../components/BlogsItem.js';
import BlogsImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import {Link} from 'react-router-dom';
import "../styles/Blogs.css";
import Popup from '../components/Popup';
import {useState, useRef} from 'react';
import Blog1 from '../pages/Blog1';


const Blogs = () => { 

    return (
      
    
      <div className="blogs"style= {{backgroundImage: `url(${BlogsImage})`}}>
        <h1 className="blogTitle"> Blogs  </h1>
        <div className="blogContainer">
   
      
        <Link >
              <button>   <div>
          {Blogs1.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
  
            <Link >
              <button>   <div>
          {Blogs2.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link >
              <button>   <div>
          {Blogs3.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link> 
            <Link >
              <button>   <div>
          {Blogs4.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link> 
            <Link >
              <button>   <div>
          {Blogs5.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link >
              <button>   <div>
          {Blogs6.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
         
         
        </div>
      </div>
    )
  }
  export default Blogs;


