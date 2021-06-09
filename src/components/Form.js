import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'


export class Formm extends Component {
 
    
    updateSeletedBeast = (e) => {
        this.setState({
            updateSeletedBeast: e.target.value
        })
        this.submitForm();
    }
    submitForm=(e)=>{
        e.preventDefault();
        
      this.setState=({
        selectedBeast:true
      })
    }
    
    render() {
        return (
            <div>
                   <Form onSubmit={(e) => this.submitForm(e)}>
                         {/* <Form.Select aria-label="Select the number of horns"> */}
                         <Form.Control as="select" defaultValue="1" onSubmit={this.props.updateSeletedBeast}>
                         <option value="1">select number of horns</option>
                             <option value="2">1</option>
                             <option value="3">2</option>
                             <option value="4">3</option>
                             <option value="5">more</option>
                           </Form.Control>
                           {/* </Form.Select> */}
                           </Form>

                {/* <Form.Group ControlId='select'> */}
                         {/* <Form.Select aria-label="Select the number of horns"> */}
                         {/* <Form.Control as="select" defaultValue="1" onChange={(e)=>this.updateSeletedBeast(e)}> */}
                         {/* <option value="1">select number of horns</option>
                             <option value="2">1</option>
                             <option value="3">2</option>
                             <option value="4">3</option>
                             <option value="5">more</option>
                           </Form.Control> */}
                           {/* </Form.Select> */}
                           {/* </Form.Group> */}
                           
            </div>
        )
    }
}



export default Formm
