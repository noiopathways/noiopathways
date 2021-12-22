import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navigation() {
    return (
        <Navbar bg="transparent" expand="md" sticky="top">
            {/* todo: revisit sticky vs fixed and browser support */}
            <Navbar.Brand href="#">Noio Pathways</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#values">Values</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#founder">Founder</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation