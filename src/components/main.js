import React from 'react';
import HornedBeasts from './HornedBeasts'
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from 'react-bootstrap/Modal';

class Main extends React.Component {

    render(){
    
    
        
            return(
               <div>
                    {
                        Data.map((beast)=>{
                            return(
                                <HornedBeasts 
                                    title={beast.title}
                                    imgIncrease={beast.imgIncrease}
                                    img={beast.image_url}
                                    modal={beast.Modal}
                                    description={beast.description}
                                    
                                />
                                
                            )
                        })
                    }
    
               </div>
        )  
        
    }
}

export default Main;

