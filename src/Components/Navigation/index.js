import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './style.css'

function Navigation() {
    return (
        <Navbar className="navBackgroundColor" variant="dark" expand="md" sticky="top">
            {/* todo: revisit sticky vs fixed and browser support */}
            <Navbar.Brand href="#"><Image src="./images/logo.png" height={50} /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#values">Values</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#team">Team</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation