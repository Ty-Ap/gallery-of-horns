import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import { Card } from 'react-bootstrap';
import './sortedBeast';
import SortedBeast from './sortedBeast';






class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      showModal : false,
      selectedBeast : '',
    }

  }

  handleOpenModal =(image_url)=> {
    this.setState ({
      showModal :true,
      selectedBeast : <Card.Img src={image_url} alt="description"></Card.Img>
    });
  }

  handleCloseModal =() => {
    this.setState ({
      showModal : false
    })
  }



  render(){
    return (
      <>
      <Header/>
      <Main handleOpenModal={this.handleOpenModal}/>
      <SelectedBeast showModal={this.state.showModal} closeModal={this.handleCloseModal} selectedBeast={this.state.selectedBeast}/>
      <SortedBeast/>
      <Footer/>
      </>
    )
  }
}

export default App;
