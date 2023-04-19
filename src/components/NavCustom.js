import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

function NavCustom() {
  return (

    <header className="App-header">

      <Navbar expand="lg" variant="light" style={{ backgroundColor: 'rgb(255, 143, 0)' }} >
        <Container fluid className='ml-4'>
          <Nav className="me-auto" variant='light'>            
            <NavItem><Link className='nav-link' to="/">Home</Link></NavItem>
            <NavItem><Link className='nav-link' to="/articles">Articles</Link></NavItem>
            <NavItem><Link className='nav-link' to="/login">Login</Link></NavItem>
            <NavItem><Link className='nav-link' to="/about-us">About us</Link></NavItem>
            <NavItem><Link className='nav-link' to="/contact-us">Contact us</Link></NavItem>
          </Nav>
          <Button variant="primary" className='mr-5'>Connect to wallet</Button>{' '}
        </Container>
      </Navbar >

    </header>
  );
}

export default NavCustom;