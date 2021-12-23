import React from 'react'
import Container from 'react-bootstrap/Container'

import CardGrid from '../CardGrid'
import './style.css'

function Services() {
    const servicesObject = [
        {
            title: "Service 1",
            image: "./images/quote1.png",
            text: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick."
        },
        {
            title: "Service 2",
            image: "./images/quote2.png",
            text: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth."
        },
        {
            title: "Service 3",
            image: "./images/quote1.png",
            text: " Cliche occupy humblebrag, swag actually VHS vape normcore bespoke keffiyeh hammock trust fund paleo."
        }
    ]
    return (
        <Container className="services" id="services">
            <h1 className="text-center">Our Services</h1>
            <CardGrid data={servicesObject} />
        </Container>
    )
}

export default Services