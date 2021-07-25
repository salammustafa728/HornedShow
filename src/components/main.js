import React from 'react';
import HornedBeasts from './HornedBeasts'
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

class Main extends React.Component {
    filter=(event)=>{
        const numberHorns = Number(event.target.value);
        let gallery=Data;
        if(numberHorns){
            gallery=Data.filter((creature)=>creature.horns===numberHorns)
        }
        this.props.updateBeast(gallery);
    }
    render(){
        
            return(
                <div>
                      <div>
                          <Form style={{width:'500px',margin:'10px auto',border:'1px solid grey',background:'#B5EAEA'}}>
                              <Form.Group>
                              
                                  <Form.Label style={{marginLeft:'20px'}}>Select Number Of Horns</Form.Label>
                              <Form.Control as='select' onChange={this.filter}>
                              <option>Select Number Of Horns </option>
                               <option value="">All</option>
                               <option value="1">One</option>
                               <option value="2">Two</option>
                               <option value="3">Three</option>
                               <option value="100">more</option>

                              </Form.Control>
                              
                              </Form.Group>
                          </Form>
                          <div style={{display:'flex',flexWrap:'wrap',margin:'10px 20px 10px 10px'}}>

                                {
                                    this.props.allBeast.map((beast,indx) => (
                                        <div style={{marginLeft:'10px'}}>
                                        <HornedBeasts 
                                        key={indx}
                                        index={indx}
                                        title={beast.title}
                                        imgIncrease={beast.imgIncrease}
                                        img={beast.image_url}
                                        description={beast.description}
                                        handleClose={this.props.handleClose}
                                        handleOpen={this.props.handleOpen}
                                    />
                                    </div>
                                    ))
                                }

                          </div>
                   
    
                    </div>
                </div>
             
        )  
        
    }
}



export default Main;

