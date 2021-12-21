import React from 'react'
import Container from 'react-bootstrap/Container'

import CardGrid from '../CardGrid'
import './style.css'

function Values() {
    const valuesObject = [
        {
            title: "first",
            image: "http://placekitten.com/g/200/200",
            text: "I'm baby williamsburg id mlkshk kitsch laborum. Woke meditation cornhole hammock, kale chips try-hard distillery shabby chic flexitarian man braid austin 3 wolf moon XOXO."
        },
        {
            title: "SECOND",
            image: "http://placekitten.com/g/200/200",
            text: "Ut proident taxidermy, celiac lorem pitchfork banh mi kale chips viral excepteur crucifix ennui. Tofu sustainable portland cupidatat consectetur lomo, occaecat selvage try-hard readymade woke small batch."
        },
        {
            title: "third",
            image: "http://placekitten.com/g/200/200",
            text: "Cloud bread ex stumptown poke next level dolore pabst you probably haven't heard of them williamsburg pop-up adipisicing wolf chillwave bicycle rights."
        }
    ]
    return (
        <Container className="values">
            <CardGrid data={valuesObject} />
        </Container>
    )
}

export default Values