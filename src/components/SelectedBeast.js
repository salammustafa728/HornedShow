import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


class Modalpop extends Component{
  
    
     render()  {
      
        return (
          <>
            <Modal show={this.props.show} onHide={this.props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body><img src={this.props.img} alt='' height='250px' width='470px'></img> </Modal.Body>
              <Modal.Title>&hearts;{this.props.imgIncrease}</Modal.Title>
              <Modal.Title>{this.props.title} {this.props.description}</Modal.Title>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.props.handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      


}

export default Modalpop;






  