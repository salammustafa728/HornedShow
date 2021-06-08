import React from 'react';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
    constructor(props){
      super(props);
      this.state={
        imgIncrease: 0

      }
    }
    requestFun= ()=>{
      //  this.props.icrease;
      
       let icre= this.state.imgIncrease;
       this.setState({
          imgIncrease:icre+=1,
         } )
         
    }
    render(){
        return(
                
              //  <div>
                 <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">&hearts;{this.state.imgIncrease}</Card.Subtitle>
    <Card.Text> {this.props.description} </Card.Text>
    <Card.Img src={this.props.img} alt="" onClick={this.requestFun}></Card.Img>
    
  </Card.Body>
</Card>
                //  <h2>
                //    {this.props.title}
                //  </h2>
                //  <h2><span aria-label="a rocket blasting off" role="img">💕</span> {this.state.imgIncrease}
                //  </h2>
                //  <p></p>
                //  <img src={this.props.img} alt="" onClick={this.requestFun}></img>
                //  <p>
                //    {this.props.description}
                //  </p>
                //  </div> 
        )
       
        
    }
}

export default HornedBeasts;


     