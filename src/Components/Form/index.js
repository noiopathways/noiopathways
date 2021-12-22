import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.css'

function Form() {
    return (
        <Container className="contactForm">
            {/* TODO: update email below to jamies */}
            < form action="https://formsubmit.co/puakehaulani.dev@gmail.com" method="POST" >
                {/* TODO: update redirect page link below */}
                < input type="hidden" name="_next" value="http://localhost:3000/" ></input >
                <input type="hidden" name="_subject" value="New Website Contact Form Message"></input>
                <Row>
                    <Col><input type="text" name="name" placeholder="Your Name" required /></Col>
                    <Col><input type="email" name="email" placeholder="Your Email" required /></Col>
                </Row>
                <Row>
                    <input type="text" name="message" placeholder="Message" required />
                </Row>
                <Row>
                    <button type="submit">Submit</button>
                </Row>
            </form >
        </Container>
    )
}

export default Form