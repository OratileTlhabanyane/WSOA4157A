import React, { Component } from 'react';


export default class BlogsItem extends Component {
  render() {
    return (
      <div className="blogsItem">
          <div style= {{backgroundImage: `url(${this.props.image})`}}></div>
          <h1>{this.props.name}</h1>
          
        </div>
    )
  }
}

