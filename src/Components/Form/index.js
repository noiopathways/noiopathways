import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

import './style.css'

function FormComponent() {
    return (
        <Container className="contactForm">
            {/* TODO: update email below to jamies */}
            < Form action="https://formsubmit.co/puakehaulani.dev@gmail.com" method="POST" >
                {/* TODO: update redirect page link below */}
                < input type="hidden" name="_next" value="http://localhost:3000/" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_subject" value="New Website Contact Form Message" />
                <Row>
                    <Col><Form.Control type="text" name="name" placeholder="Your Name" /></Col>
                    <Col><Form.Control type="email" name="email" placeholder="Your Email" /></Col>
                </Row>
                <Row>
                    <Form.Control as="textarea" name="message" placeholder="Message" required />
                </Row>
                <Row>
                    <button type="submit">Submit</button>
                </Row>
            </Form >
        </Container>
    )
}

export default FormComponent