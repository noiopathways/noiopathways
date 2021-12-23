import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './style.css'

function Hero() {
    return (
        <div className="hero" id="home">
            <Container>
                <Row><Image className="logoText" src="./images/logoText.png" fluid /></Row>
                <Row><span>Tagline here</span></Row>
            </Container>
        </div>
    )
}

export default Hero