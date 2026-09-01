import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import { Link, useLocation } from 'react-router-dom'
import './style.css'

function Navigation() {
    const [transparentBg, setTransparentBg] = useState(true)
    const location = useLocation()

    useEffect(() => {
        // Only use the scroll-based transparency on the landing page.
        if (location.pathname === '/') {
            const onScroll = () => {
                if (window.pageYOffset > 350) setTransparentBg(false)
                else setTransparentBg(true)
            }
            window.addEventListener('scroll', onScroll)
            // set initial state based on current scroll
            onScroll()
            return () => window.removeEventListener('scroll', onScroll)
        }

        // For any other route (e.g. /coaching), don't use transparent background
        setTransparentBg(false)
    }, [location.pathname]);

    return (
        <Navbar className={` ${transparentBg ? "navBackgroundTransparent" : "navBackgroundColor"}`} variant="dark" expand="md" sticky="top">
            <Navbar.Brand as={Link} to="/">{transparentBg ? <></> : <Image src="/images/logo.png" height={50} />}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                    <Nav.Link as={Link} to="/#about">About</Nav.Link>
                    <Nav.Link as={Link} to="/#approach">Approach</Nav.Link>
                    <Nav.Link as={Link} to="/#offerings">Offerings</Nav.Link>
                    <Nav.Link as={Link} to="/coaching">Coaching</Nav.Link>
                    <Nav.Link as={Link} to="/#team">Team</Nav.Link>
                    <Nav.Link as={Link} to="/#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation