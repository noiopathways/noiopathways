import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './style.css'

function About() {
    return (
        <Container className="about" id="about">
            <Row xs={1} sm={2}>
                <Col className="image-container">
                    <Image src="./images/about.jpg" height={400} width={400} rounded fluid />
                </Col>
                <Col className="text-center my-auto textContainerAbout">
                    <h1 className="text-center">About Noio Pathways</h1>

                    Named for the Noio /Noh-ee-oh/ (Hawaiian black noddy), a seabird used in traditional navigation across the Pacific Ocean, Noio Pathways seeks to build community and advance the environmental justice movement through capacity building, strategic advising, leadership development, and education. The Noio flies far out to sea to fish in the morning, but always returns to their islands in the evening, and thus is a welcome sight for those out at sea looking to find their way to land. Birds such as the Noio were used in traditional navigation by many seafaring cultures around the world, and show us that nature, ancestral knowledge, and our cultures often hold much wisdom that can help inform our direction today. Much like how the Noio was used by ocean voyagers to find land, Noio Pathways collaborates with our clients to identify their pathways to equitable solutions, builds their capacity, and helps guide them to their destination. We support organizations, communities, and leaders with community building, strategic advising, and capacity building around the integration of equity into plans, processes, programs, and policies, and build community and organizational capacity to address environmental and climate justice and racial equity.
                </Col>

            </Row>
        </Container>
    )
}

export default About