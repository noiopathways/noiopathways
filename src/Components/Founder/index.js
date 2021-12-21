import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

function Founder() {
    return (
        <Container className="founder">
            <h1 className="text-center">About Our Founder</h1>
            <Row xs={1} sm={2}>
                <Col className="text-center" style={{ backgroundColor: "bisque" }}>
                    Col1
                </Col>
                <Col className="text-center" style={{ backgroundColor: "wheat" }}>
                    Col2</Col>
            </Row>
        </Container>
    )
}

export default Founder