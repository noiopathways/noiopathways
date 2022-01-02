import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './style.css'

function Hero() {
    return (
        <div className="hero" id="home">
            <Container>
                <Row className="logoText" ><Image src="./images/logoText.png" /></Row>
                {/* <Row className="tagline"></Row> */}
            </Container>
        </div>
    )
}

export default Hero