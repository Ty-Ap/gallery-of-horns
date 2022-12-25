import React from 'react';


// HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      favorites :0,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorites : this.state.favorites+1
    })
  }

  render(){
    return <>
    <h2>{this.props.title}</h2>
    <img id ={this.props._id} src={this.props.image_url} alt={this.props.alt}></img>
    <p>{this.props.description}</p>
    <p onClick={this.handleFavorite}>favorite?</p>
    <p> favorited 💚{this.state.favorites} </p>
    
    </>

  }
}


export default HornedBeast;