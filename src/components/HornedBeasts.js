import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
    constructor(props){
      super(props);
      this.state={
        imgIncrease: 0,
     
      }
    }
    requestFun= ()=>{
       let icre= this.state.imgIncrease;
       this.setState({
          imgIncrease:icre+=1,
          
         } )    
    }
   
    render(){

        return(
          <div >
              <Card style={{ width: '18rem' }} >
                  <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">&hearts;{this.state.imgIncrease}</Card.Subtitle>
                  <Card.Img src={this.props.img} alt="" onClick={()=> {this.requestFun(); 
                    this.props.handleClose(this.props.title, this.props.img, this.props.description);}}></Card.Img>
                    <Card.Text> {this.props.description} </Card.Text>
                  </Card.Body>
                  </Card>
          </div>
                 
        )
    }
}

export default HornedBeasts;

    //        show:true,
    //       img:this.props.img,
    //       title:this.props.title,
    //       description:this.props.description,

    //       handleClose = () => {
    //   this.setState({
    //     show:false,
    //    } )
    //  }

    //    { <SelectedBeasts 
    //                   handleClose={this.handleClose}
    //                   show={this.state.show}
    //                   title={this.state.title}
    //                   img={this.state.img}
    //                   description={this.state.description}
    //                   imgIncrease={this.state.imgIncrease}
    //                /> }