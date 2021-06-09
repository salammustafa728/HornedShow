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
              {/* <Modal.Title>&hearts;{this.props.imgIncrease}</Modal.Title> */}
              <Modal.Title>{this.props.title} {this.props.description}</Modal.Title>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
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









// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import Modal from 'react-bootstrap/Modal'
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';

// // class Modalpop extends React.Component{
 
    
// //      render()  {
      
// //         return (
// //           <div>
// //             <Modal show={this.props.show} >
// //               <Modal.Header closeButton>
// //                 <Modal.Title>{this.props.title}</Modal.Title>
// //               </Modal.Header>
              
// //               <Modal.Body> <Card style={{ width: '18rem' }}>
// //                   <Card.Body>
// //                   {/* <Card.Title>{this.props.title}</Card.Title> */}
// //                   {/* <Card.Subtitle className="mb-2 text-muted">&hearts;{this.props.imgIncrease}</Card.Subtitle> */}
// //                   <Card.Img src={this.props.img} alt="" onClick={()=> {this.requestFun()} }></Card.Img>
// //                     <Card.Text> {this.props.description} </Card.Text>
// //                   </Card.Body>
// //                   </Card>  </Modal.Body>
              
// //               <Modal.Footer>
// //                 <Button variant="secondary" onClick={this.handleClose}>
// //                   Close
// //                 </Button>
// //                 {/* <Button variant="primary" onClick={this.props.handleClose}>
//                   Save
//                 </Button> */}
//               {/* </Modal.Footer>
//             </Modal>
//           </div>
//         );
//       } */}
      
// // {/* <Modal.Body>{this.props.img}  </Modal.Body>
// //               {/* <Modal.Title>&hearts;{this.props.imgIncrease}</Modal.Title> */}
// //               <Modal.Title>{this.props.description}</Modal.Title> */}

// {/* }

// export default Modalpop; */}






  