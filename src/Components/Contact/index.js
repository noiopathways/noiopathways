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
            <Row xs={1} sm={2} style={{ display: "flex", justifyContent: "center" }}>
                <Col sm={4}>
                    <h1 className="text-center">Contact Us</h1>
                    <Container>Mollit enim fam af nulla hexagon narwhal pug bicycle rights deep v veniam.<br />
                        <div><FaLinkedin /> <FaInstagramSquare /></div></Container>
                </Col>
                <Col sm={8} className="formCol">
                    <FormComponent />
                </Col>
            </Row>
        </Container>
    )
}
export default Contact