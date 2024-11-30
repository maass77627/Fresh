// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import BasicInfo from './BasicInfo';


function NavComp() {



    return (
        
      <Navbar id="nav" expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light">
          <Container>
            <Navbar.Brand><img id="logo" src="Freshlogo.png" alt="logo"></img></Navbar.Brand>
            <div id="links">
            <Link id="a" to="/">Home</Link>
            <Link id="a" to="/menu">Menu</Link>
            <Link id="a" to="/location">Location</Link>
            <Link id="a" to="/about">About</Link>
            </div>
            
        
      </Container>
    </Navbar>
         
    )
}

export default NavComp