import React from 'react';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";
import {Consumer, Provider, AuthContext} from "../Authcontext";


export const NavBar = () => (
    <Consumer>
        {({ logOut, username }) => (
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navBar'>
                    <Navbar.Brand><Link to="/" style={linkStyle}>Karate </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/history" style={linkStyle}>Karete history</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/styles" style={linkStyle}>Karate styles </Link>
                            </Nav.Link>
                            <NavDropdown title="My karate" id="collasible-nav-dropdown" style={linkStyle}>
                                <NavDropdown.Item>
                                <Link to="/user">My userdetails</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/user">My training plans</Link>
                                </NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets" style={linkStyle}>About</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes" style={linkStyle}>
                                Chuck Norris
                            </Nav.Link>
                            <button onClick={logOut}>Logout</button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>)}
            </Consumer>
        )


const linkStyle = {
    color: 'lightgrey'
}




