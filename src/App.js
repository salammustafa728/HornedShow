import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form } from 'react-bootstrap';


class App extends React.Component {
 

  render() {
    return (
      <div>
        <Header />
        <Main 
        
        />
        <Footer />
      </div>
    )
  }
  
}

export default App;


// import React from 'react';
// import Header from './components/header';
// import Main from './components/main';
// import Footer from './components/footer';
// import hornedDta from './data.json'
// import SelectedBeast from './components/SelectedBeast';

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       show:false,
//       title:'',
//       img:'',
//       description:''
//     }
//   }

//   handleClose = (title,img,description) => {

//     console.log(title);
//     console.log(img);
//     console.log('before',this.state.show);
//     console.log(description);
//     this.setState({
//       show: !this.state.show,
//       img:img,
//       title:title,
//       description:description
//      } )
     
//    }
//    handleOpen=()=>{
//      this.setState({
//       show: !this.state.show,
//      })
//      console.log('after',this.state.show);

//    }
   
//   render() {
//     return (
//       <div>
//         <Header />
//         <Main 
//         hornedData={hornedDta}
//         handleClose={this.handleClose}
//         handleOpen={this.handleOpen}
//         />
//         <SelectedBeast 
//           show={this.state.show}
//           img={this.state.img}
//           title={this.state.title}
//           description={this.state.description}
//           handleClose={this.handleClose}
//           handleOpen={this.handleOpen}
//         />
//         <Footer />
//       </div>
//     )
//   }
  
// }

// export default App;