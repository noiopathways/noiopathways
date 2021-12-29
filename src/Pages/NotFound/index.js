import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import './style.css'

const btnStyle = {
    color: "#10404c",
    borderColor: "#10404c",
    backgroundColor: "transparent",
    padding: "5px 40px"
}

function NotFound() {
    return (
        <Container fluid className="notFound">
            <Row>
                <Image src="./images/404.png" fluid />
            </Row>
            <Row className="text-center">
                <Col>
                    <Link to="/"><Button style={btnStyle}>return</Button></Link>
                </Col>
            </Row>
        </Container>


    )
}

export default NotFound