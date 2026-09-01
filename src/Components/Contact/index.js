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
                <Col sm={4}>
                    <h1 className="text-center">Contact Us</h1>
                    <Container style={{ paddingBottom: "30px" }}>
                        <p className="text-center">Interested in working or partnering with Noio Pathways? Inquire for more information and quotes.
                        </p>

                        <h1 className="text-center"><a style={{ color: "#0e404b" }} href="https://www.linkedin.com/in/jstroble/" target="_blank" rel='noreferrer'><FaLinkedin /></a>
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