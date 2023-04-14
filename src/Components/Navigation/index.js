import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './style.css'

function Navigation() {
    const [transparentBg, setTransparentBg] = useState(true)
    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 350) {
                setTransparentBg(false)
            } else {
                setTransparentBg(true)
            }
        }
    }, []);

    return (
        <Navbar className={` ${transparentBg ? "navBackgroundTransparent" : "navBackgroundColor"}`} variant="dark" expand="md" sticky="top">
            <Navbar.Brand href="/">{transparentBg ? <></> : <Image src="./images/logo.png" height={50} />}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/#offerings">Offerings</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/speaking">Speaking</Nav.Link>
                    {/* <Nav.Link href="/members">Members</Nav.Link> */}
                    <Nav.Link href="/about#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation