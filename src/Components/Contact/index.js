import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'

import FormComponent from '../Form'
import './style.css'

export const ContactCTA = () => {
    return (
        // TODO: Customize Client Content
        <div className="contactCTA">
            Contact us for a consultation! <br />
            <Link to="/contact">
                {/* TODO: Customize Button variant */}
                <Button variant="dark">Connect</Button>
            </Link>
        </div>

    )
}

export const ContactSocialIcons = () => {
    return (
        <>
            {/* 
                TODO: add or remove client icons from react icons
                TODO: update hrefs with clients urls
                TODO: update color on icons
            */}
            <h1 className={'text-center'} >
                <a style={{ color: "#0e404b" }} href="https://www.linkedin.com/in/jstroble/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
                <a style={{ color: "#0e404b" }} href="https://www.instagram.com/noiopathways/" target="_blank" rel='noreferrer'><FaInstagramSquare /></a>
            </h1>
        </>
    )
}

function Contact() {
    return (
        <Container className="contact" id="contact">
            <Row xs={1} sm={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Col sm={4}>
                    <h1 className="text-center">Contact Us</h1>
                    <Container style={{ paddingBottom: "30px" }}>
                        <p className="text-center">Interested in working or partnering with Noio Pathways? Inquire for more information and quotes.
                        </p>
                        <ContactSocialIcons />
                    </Container>
                </Col>
                <Col sm={8} className="formCol">
                    <FormComponent />
                </Col>
            </Row>
        </Container>
    )
}
export default Contact