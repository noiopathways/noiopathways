import React from 'react'
import Container from 'react-bootstrap/Container'

import { CardGridListItem } from '../CardGrid'
import Banner from '../Banner'
import './style.css'

function Services() {
    const servicesObject = [
        {
            title: "Learn how to navigate - Building Shared Understanding",
            image: "./images/path3.jpg",
            listItem: ["Environmental and climate justice education & workshops", "Equity assessments & advising", "Speaking events & presentations", "Facilitated dialogue", "Racial equity training & coaching"]
        },
        {
            title: "Find Your Path - Planning for Systemic Change",
            image: "./images/path1.jpg",
            listItem: ["Strategic advising & recommendations",
                "Examining decision-making processes & power analyses",
                "Strategic planning & facilitation",
                "Project management & resource planning"
            ]
        },
        {
            title: "Sail to Solutions - Implementation",
            image: "./images/path2.jpg",
            listItem: [
                "Designing collaborative & inclusive processes",
                "Community-driven policy development", "Capacity building for under-resourced communities",
                "Community engagement & partnership",
                "Grant and RFP design",
                "Evaluation"

            ]
        }
    ]
    return (
        <Container className="services" id="services">
            <Banner />
            <h1 className="text-center">Our Services</h1>
            <CardGridListItem data={servicesObject} />
        </Container>
    )
}

export default Services