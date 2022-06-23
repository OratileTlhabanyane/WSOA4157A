import React, { Component } from 'react';
import {Blogs1} from '../Assistance/BlogsList.js';
import {Blogs2} from '../Assistance/BlogsList.js';
import {Blogs3} from '../Assistance/BlogsList.js';
import {Blogs4} from '../Assistance/BlogsList.js';
import {Blogs5} from '../Assistance/BlogsList.js';
import {Blogs6} from '../Assistance/BlogsList.js';
import {Blogs7} from '../Assistance/BlogsList.js';
import {Blogs8} from '../Assistance/BlogsList.js';
import {Blogs9} from '../Assistance/BlogsList.js';
import {Blogs10} from '../Assistance/BlogsList.js';
import BlogsItem from '../components/BlogsItem.js';
import BlogsImage from '../assets/michael-benz-IgWNxx7paz4-unsplash.jpg';
import {Link} from 'react-router-dom';
import "../styles/Blogs.css";



const Blogs = () => { 

    return (
      
    
      <div className="blogs"style= {{backgroundImage: `url(${BlogsImage})`}}>
        <h1 className="blogTitle"> Blogs  </h1>
        <div className="blogContainer">
   
      
        <Link to ='/Blog1' >
              <button>   <div className="blogImages">
          {Blogs1.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
  
            <Link to ='/Blog2' >
              <button>   <div>
          {Blogs2.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link to ='/Blog3' >
              <button>   <div>
          {Blogs3.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link> 
            <Link to ='/Blog4'>
              <button>   <div>
          {Blogs4.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link> 
            <Link to ='/Blog5' >
              <button>   <div>
          {Blogs5.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link to ='/Blog6' >
              <button>   <div>
          {Blogs6.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link to ='/Blog7' >
              <button>   <div>
          {Blogs7.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link to ='/Blog8' >
              <button>   <div>
          {Blogs8.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link to ='/Blog9' >
              <button>   <div>
          {Blogs9.map((blogsItem, value) => {
            return (
              <BlogsItem value = {value} name= {blogsItem.name} image= {blogsItem.image}/>
            )
          })}
        </div>
        </button>
            </Link>
            <Link to ='/Blog10' >
              <button>   <div>
          {Blogs10.map((blogsItem, value) => {
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


