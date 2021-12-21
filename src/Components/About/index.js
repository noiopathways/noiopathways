import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

function About() {
    return (
        <Container className="about">
            <h1 className="text-center">About Noio Pathways</h1>
            <Row xs={1} sm={2}>
                <Col className="text-center" style={{ backgroundColor: "wheat" }}>
                    Col1
                </Col>
                <Col className="text-center" style={{ backgroundColor: "bisque" }}>
                    Col2</Col>
            </Row>
        </Container>
    )
}

export default About