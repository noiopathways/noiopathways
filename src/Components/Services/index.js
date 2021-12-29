import React from 'react'
import Container from 'react-bootstrap/Container'

import CardGrid from '../CardGrid'
import Banner from '../Banner'
import './style.css'

function Services() {
    const servicesObject = [
        {
            title: "Service 1",
            image: "./images/path1.jpg",
            text: "Umami you probably haven't heard of them health goth, aesthetic vegan beard palo santo bushwick."
        },
        {
            title: "Service 2",
            image: "./images/path2.jpg",
            text: "I'm baby salvia waistcoat fashion axe small batch. Craft beer godard ugh hella slow-carb occupy chillwave coloring book flexitarian 90's farm-to-table photo booth."
        },
        {
            title: "Service 3",
            image: "./images/path3.jpg",
            text: " Cliche occupy humblebrag, swag actually VHS vape normcore bespoke keffiyeh hammock trust fund paleo."
        }
    ]
    return (
        <Container className="services" id="services">
            <Banner />
            <h1 className="text-center">Our Services</h1>
            <CardGrid data={servicesObject} />
        </Container>
    )
}

export default Services