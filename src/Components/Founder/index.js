import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './style.css'

function Founder() {
    return (
        <Container className="founder">
            <Row xs={1} sm={2}>
                <Col className="text-center" style={{ backgroundColor: "bisque" }}>
                    Col1
                </Col>
                <Col className="text-center" style={{ backgroundColor: "wheat" }}>
                    <h1 className="text-center">About Our Founder</h1>
                    Waistcoat you probably haven't heard of them hoodie, cold-pressed jianbing tattooed copper mug craft beer pabst gentrify. XOXO before they sold out craft beer hexagon butcher poutine pickled DIY fashion axe selfies. Deep v viral semiotics echo park +1, blue bottle hammock cred food truck everyday carry. Irony poutine raclette craft beer.

                    Four loko blue bottle craft beer kitsch enamel pin prism four dollar toast. Banh mi small batch bespoke shoreditch, narwhal mustache tacos seitan listicle affogato kogi kinfolk vaporware polaroid portland. Before they sold out small batch taxidermy, succulents pabst taiyaki church-key single-origin coffee affogato 90's everyday carry sriracha. Deep v kitsch kombucha small batch, blog knausgaard iPhone etsy selfies master cleanse live-edge banjo poke. Health goth cray before they sold out mustache XOXO. Pug mumblecore adaptogen hella, readymade freegan cardigan hashtag subway tile iPhone 90's twee enamel pin wolf woke.

                    Dummy text? More like dummy thicc text, amirite?
                </Col>
            </Row>
        </Container>
    )
}

export default Founder