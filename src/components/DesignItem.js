import React, { Component } from 'react';


export default class DesigItem extends Component {
  render() {
    return (
      <div className="designItem">
          <div style= {{backgroundImage: `url(${this.props.image})`}}></div>
          <h1>{this.props.name}</h1>
          
        </div>
    )
  }
}