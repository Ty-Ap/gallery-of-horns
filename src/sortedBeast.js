import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';
import data from './horn.json';


class SortedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      sortedData : data,
    }
  }
  
  handleSelect = (event) => {
    let selected = event.target.value;
  
    if(selected==='one'){
      let newData = data.filter(horns=>horns === 1);
      this.setState({
        sortedData: newData
      });
    }
    if(selected==='two'){
      let newData = data.filter(horns=> horns === 2);
      this.setState({
        sortedData: newData
      });
    }
  }


  render(){
    return (
      <>
        <ListGroup>
          {this.state.sortedData.map((image_url) => {
            return <ListGroup.Item>{image_url}</ListGroup.Item>
          })}
        </ListGroup>
        <Form>
          <Form.Group>
            <Form.Select name="selected" onChange={this.handleSelect}>
              <option value="all">all</option>
              <option value="one">one</option>
              <option value="two">two</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </>
    );
  }
}



export default SortedBeast;
