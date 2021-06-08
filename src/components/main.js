import React from 'react';
import HornedBeasts from './HornedBeasts'
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


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

