import React, { Component } from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Signup from './signup';
export default class Header extends Component {
  render() {
    return (
      <div>
           <Navbar bg="light" expand="lg">
           <Link to='/'><Navbar.Brand >E-Commerce</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
            
                  <Nav.Link><Link to="/">Home</Link></Nav.Link>
                  <Nav.Link><Link to="/About"> About </Link></Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Categorie</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
              <Button variant="success">Sign in</Button>
              <Button variant="primary"><Signup /></Button>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>;

        
      </div>
    )
  }
}
