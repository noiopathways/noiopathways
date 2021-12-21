import React from 'react'
// import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CardComponent from '../Card'
import './style.css'

function CardGrid() {
    return (
        <Row>
            <Col>
                <CardComponent image="http://placekitten.com/g/200/200" title="First" text="I'm baby williamsburg id mlkshk kitsch laborum. Woke meditation cornhole hammock, kale chips try-hard distillery shabby chic flexitarian man braid austin 3 wolf moon XOXO. " />
            </Col>

            <Col>
                <CardComponent image="http://placekitten.com/g/200/200" title="Second" text="Ut proident taxidermy, celiac lorem pitchfork banh mi kale chips viral excepteur crucifix ennui. Tofu sustainable portland cupidatat consectetur lomo, occaecat selvage try-hard readymade woke small batch." />
            </Col>
            <Col>
                <CardComponent image="http://placekitten.com/g/200/200" title="Third" text="Cloud bread ex stumptown poke next level dolore pabst you probably haven't heard of them williamsburg pop-up adipisicing wolf chillwave bicycle rights." />
            </Col>
        </Row>
    )
}

export default CardGrid