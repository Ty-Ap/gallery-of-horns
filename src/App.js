import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Modal from 'react-bootstrap/Modal'
import HornedBeast from './HornedBeast';






class App extends React.Component{
  constructor(props){
    super(props);
    this.state= {
      showModal : false,
      selectedBeast : ''
    }

  }

  handleOpenModal =(image_url)=> {
    this.setState ({
      showModal :true,
      selectedBeast : <img src={image_url} alt="description"></img>
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
      <Modal show={this.state.showModal} onHide={this.handleCloseModal} >
        <Modal.Header closeButton>
          {this.state.selectedBeast}

        </Modal.Header>
      </Modal>
      <Footer/>
      </>
    )
  }
}

export default App;
