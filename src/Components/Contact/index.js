import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";

import FormComponent from '../Form'
import './style.css'

function Contact() {
    return (
        <Container className="contact" id="contact">
            <Row xs={1} sm={2} style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                <Col sm={4} className="text-center">
                    <h1 >Contact Us</h1>
                    <Container style={{ paddingBottom: "30px" }}>
                        We choose to work with individuals, organizations, and communities that are dedicated to equitable processes and change, collaboration, and long-term relationship building. Please reach out to us to learn more about working with Noio Pathways!
                        <br />
                        <h1 ><a style={{ color: "#0e404b" }} href="https://www.linkedin.com/in/jstroble/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
                            <a style={{ color: "#0e404b" }} href="https://www.instagram.com/noiopathways/" target="_blank" rel='noreferrer'><FaInstagramSquare /></a></h1>
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