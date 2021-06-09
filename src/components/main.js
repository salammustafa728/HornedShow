import React from 'react';
import HornedBeasts from './HornedBeasts'
import Data from '../data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form'
// import Container from 'react-bootstrap/Container'


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            updateSeletedBeast:6
        }
    }

    updateSeletedBeast = (e) => {
        this.setState({
            updateSeletedBeast: e.target.value
        })
        this.onSubmit();
    }
    onSubmit=()=>{
      this.setState=({
        selectedBeast:true
      })
    }
    
    render(){
        
            return(
               <div>         
                         <Form />
                            {Data.map((beast)=>{
                            return(
                                <div>
                                    {
                                        this.props.updateSeletedBeast === beast.horns || 
                                        <HornedBeasts key={beast.horns}
                                        title={beast.title}
                                        imgIncrease={beast.imgIncrease}
                                        img={beast.image_url}
                                        description={beast.description}
                                        horns={beast.horns}
                                        /> ||  this.props.updateSeletedBeast === '5' ||
                                       <HornedBeasts key={beast.horns}
                                       title={beast.title}
                                       imgIncrease={beast.imgIncrease}
                                       img={beast.image_url}
                                       description={beast.description}
                                       horns={beast.horns}
                                    
                                        />
                                   }  

                                     </div>
                         )})}
                    
               </div>
        )  
    }
}



export default Main;




// import React from 'react';
// import HornedBeasts from './HornedBeasts'
// import Data from '../data.json';
// import 'bootstrap/dist/css/bootstrap.min.css';


// class Main extends React.Component {

//     render(){
        
//             return(
//                <div>
//                     {
//                         Data.map((beast)=>{
//                             return(
//                                 <HornedBeasts 
//                                     title={beast.title}
//                                     imgIncrease={beast.imgIncrease}
//                                     img={beast.image_url}
//                                     description={beast.description}
//                                     handleClose={this.props.handleClose}
//                                     handleOpen={this.props.handleOpen}
//                                 />
                                
//                             )
//                         })
//                     }
    
//                </div>
//         )  
        
//     }
// }



// export default Main;

