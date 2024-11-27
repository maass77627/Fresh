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
            <Link to="/home">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">location</Link>
            </div>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                  {/* <Nav id="links" className="me-auto"> */}
                  {/* <Nav.Link  href={<BasicInfo></BasicInfo>} >Home</Nav.Link> */}
                  {/* <Nav.Link href="#link">Link</Nav.Link> */}
                  {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown"> */}
                  {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                  {/* <NavDropdown.Item href="#action/3.2"> */}
                {/* Another action */}
              {/* </NavDropdown.Item> */}
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4"> */}
                {/* Separated link */}
              {/* </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          {/* </Nav> */}
          
          {/* <Form inline> */}
        {/* <Row> */}
          {/* <Col xs="auto"> */}
            {/* <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form> */}

        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
         
    )
}

export default NavComp