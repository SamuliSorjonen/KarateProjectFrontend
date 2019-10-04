import React from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";



export const NotLogInNavbar = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" style={linkStyle}>Karate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link>
                    <Link to="/history" style={linkStyle}>Karete history</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/styles" style={linkStyle}>Karate styles </Link>
                </Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="#deets" style={linkStyle}>About</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" style={linkStyle}>
                    Chuck Norris
                </Nav.Link>
                <Nav.Link>
                    <Link to="/login" style={linkStyle}>Login</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/signin" style={linkStyle}>Create an account</Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

const linkStyle = {
    color: 'lightgrey',
}

