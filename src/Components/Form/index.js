import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
                    <Col sm={6} style={{ paddingBottom: 10 }}><Form.Control type="text" name="name" placeholder="Your Name" /></Col>
                    <Col sm={6} style={{ paddingBottom: 10 }}><Form.Control type="email" name="email" placeholder="Your Email" /></Col>
                </Row>
                <Row style={{ paddingBottom: 10 }}>
                    <Col><Form.Control as="textarea" name="message" placeholder="Message" style={{ height: '200px' }} required /></Col>
                </Row>
                <Row >
                    <Col style={{ display: "flex", justifyContent: "end" }}><Button type="submit">Submit</Button></Col>
                </Row>
            </Form >
        </Container >
    )
}

export default FormComponent