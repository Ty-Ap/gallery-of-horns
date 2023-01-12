import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



// HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

class HornedBeast extends React.Component{
  constructor(props){
    super(props);
    this.state={
      favorites :0,
      unFavorite : false,
    }
  }

  handleFavorite = () => {
    this.setState({
      favorites : this.state.favorites+1
    })
  }

  handleUnfavorite =()=> {
    this.setState({
      unFavorite: true
    })
  }

  isMonster =()=>{
    this.setState({
      unFavorite : false
    })
  }

  handleBeastClick = () =>{
    this.props.handleOpenModal(this.props.image_url)
  }

  render(){
    return <Card border="dark" style={{ width: '18rem' }} key={this.props.keyword} id={this.props._id} alt={this.props.description}>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Img onClick={this.handleBeastClick} id={this.props._id} src={this.props.image_url} alt={this.props.description} />
    <Card.Body alt={this.props.description}>{this.props.description}</Card.Body>
    <Button onClick={this.handleFavorite}>Favorite ?</Button>

    <p> 💚 {this.state.favorites} </p>

    <Button variant="danger" onClick={this.handleUnfavorite}>Remove Favorite?</Button>
    <div>{this.state.unFavorite ? 'This item has been unfavorited, you fickle monster.' :'' }</div>
    
    </Card>

  }
}


export default HornedBeast;