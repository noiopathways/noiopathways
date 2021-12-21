import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CardComponent from '../Card'
import './style.css'

function CardGrid(props) {
    const colContent = props.data.map(i => (
        <Col key={i.title}>
            <CardComponent image={i.image} title={i.title} text={i.text} />
        </Col>)
    )

    return (
        <Container>
            <Row xs={1} sm={3}>
                {colContent}
            </Row>
        </Container>
    )
}

export default CardGrid