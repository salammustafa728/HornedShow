import React from 'react';
import HornedBeasts from './HornedBeasts'
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={
          imgIncrease: 0
  
        }
      }
    //   requestFun= ()=>{
    //     //  this.props.icrease;
    //      let icre= this.state.imgIncrease;
    //      this.setState({
    //         imgIncrease:icre+=1,
    //        } )
    //   }
     Mod() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Button variant="primary" onClick={handleShow}>
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{this.props.img}</Modal.Body>
              <Modal.Title>&hearts;{this.state.imgIncrease}</Modal.Title>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
      render(Mod);
}

export default Modal;