import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Articles from './Articles';

function NavCustom() {
  return (

    // <Navbar expand="lg" bg="dark" variant="dark" >
      <Navbar expand="lg" variant="light" style={{backgroundColor:'rgb(249, 168, 37)'}} >
      {/* <Navbar expand="lg" variant="light" style={{backgroundColor:'rgb(226, 96, 5)'}} > */}
      <Container fluid>
        <Nav className="me-auto" variant='light'>          
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#articles">Articles</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#about-us">About us</Nav.Link>
          <Nav.Link href="#contact-us">Contact us</Nav.Link>
        </Nav>
        <Button variant="primary">Connect to wallet</Button>{' '}
      </Container>
    </Navbar >

  );
}

export default NavCustom;