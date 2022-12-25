import React from 'react';

// HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

class HornedBeast extends React.Component{
  render(){
    return <>
    <h2>Title of Animal</h2>
    <img src="" alt="thisAlt" title="thisTitle"></img>
    <p>descriptions and stuff</p>
    <>{this.props.title}</>
    <>{this.props.imageUrl}</>
    <>{this.props.description}</>
    </>
  }
}


export default HornedBeast;