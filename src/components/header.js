import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Navbar'

class Header extends React.Component {

    
    render(){
       
        return(
            <header>
            <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Gallery Of Horns</Navbar.Brand>
            <Nav className="me-auto">
            </Nav>
            </Container>
             </Navbar>
              
            </header>
        )
    }
}

export default Header;