import React from 'react';

// HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

class HornedBeast extends React.Component{
  render(){
    return <>
    <h2>{this.props.title}</h2>
    <img src={this.props.image_url} alt={this.props.alt} title={this.props.title}></img>
    <p>{this.props.description}</p>
    
    </>

  }
}


export default HornedBeast;