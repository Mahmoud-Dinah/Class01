import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
 import Card from 'react-bootstrap/Card';
 import Button from 'react-bootstrap/Button';

export class SelectedBeast extends Component {
    render() {
        
        return (
            <div>
               <Modal show={this.props.show}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
       
        <Card.Img style={{ width: '18rem', color: 'red', backgroundColor: 'black' }} variant="top" src={this.props.img}  alt={this.props.title}  />
       
      
        </Modal.Body>
        <Modal.Footer>
    
        {this.props.description}               
          
        </Modal.Footer>
        <Button variant="primary" onClick={this.props.showModal}>
          Close
          </Button>
      </Modal>
            </div>
        )
    }
}

export default SelectedBeast
