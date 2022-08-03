import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';       
function NavbarApp() {
  return (
    <div> <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">  
    <Container>  
      <Navbar.Brand href="#home">Navbar Brand</Navbar.Brand>  
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
      <Navbar.Collapse id="responsive-navbar-nav">  
        <Nav className="me-auto"> 
        
          <Nav.Link href="#features">Home</Nav.Link>  
          <Nav.Link href="/">Person</Nav.Link>  
          <Nav.Link href="/Games">Planets</Nav.Link>
          
        </Nav>  
        <Nav>  
        <NavDropdown title="About me" id="collasible-nav-dropdown">  
            <NavDropdown.Item href="#action/3.1">Planet 1</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.2">Planet</NavDropdown.Item>  
            <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>  
            <NavDropdown.Divider />  
            <NavDropdown.Item href="#action/3.4">Separated Item</NavDropdown.Item>  
          </NavDropdown>  
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
  </Navbar>  </div>
  )
}

export default NavbarApp