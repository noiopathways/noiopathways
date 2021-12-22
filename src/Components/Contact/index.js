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
                    <Container style={{ paddingBottom: "30px" }}>Mollit enim fam af nulla hexagon narwhal pug bicycle rights deep v veniam.<br />
                        <h1 ><FaLinkedin /> <FaInstagramSquare /></h1>
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