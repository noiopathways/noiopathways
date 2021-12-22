import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

import Form from '../Form'

function Contact() {
    return (
        <Container>
            <Row xs={1} sm={2}>
                <Col>
                    Col1
                </Col>
                <Col>
                    <Form />
                </Col>
            </Row>
        </Container>
    )
}
export default Contact