import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import hornedDta from './data.json'
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      show:false,
      title:'',
      img:'',
      description:'',
      allBeast:hornedDta
    }
  }

  handleClose = (title,img,description) => {

    console.log(title);
    console.log(img);
    console.log('before',this.state.show);
    console.log(description);
    this.setState({
      show: !this.state.show ? true: false ,
      img:img,
      title:title,
      description:description,
      
     } )
     console.log('after',this.state.show);
     
   }
   handleOpen=()=>{
     this.setState({
      show: !this.state.show,
      
     })
     console.log('after',this.state.show); 
   }

   updateBeast= (allBeast)=>{
     this.setState({allBeast})

   }
   
  render() {
    return (
      <div>
        <Header />
        <Main 
        allBeast={this.state.allBeast}
        hornedData={hornedDta}
        handleClose={this.handleClose}
        handleOpen={this.handleOpen}
        updateBeast={this.updateBeast}
        />
        <SelectedBeast 
          show={this.state.show}
          img={this.state.img}
          title={this.state.title}
          description={this.state.description}
          handleClose={this.handleClose}
          handleOpen={this.handleOpen}
        />
        <Footer />
      </div>
    )
  }
  
}

export default App;