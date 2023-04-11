import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

import './style.css'

export const PortfolioProjects = () => {
    return (
        <Container className="about" id="about">
            <Row xs={1} sm={2}>
                <Col className="image-container">
                    <Figure>
                        <Figure.Image src="./images/about.jpg" alt="Silhouette of founder and OC1 canoe at sunset. Credit: Dennis Wise" height={400} width={400} rounded fluid />
                        <Figure.Caption>Credit: Dennis Wise</Figure.Caption>
                    </Figure>
                </Col>
                <Col className="text-center my-auto textContainerAbout">
                    Much like how the Noio was used by ocean voyagers to find land, Noio Pathways collaborates with our clients to identify their pathways to equitable solutions, builds their capacity, and helps guide them to their destination. We support organizations, communities, and leaders with community building, strategic advising, and capacity building around the integration of equity into plans, processes, programs, and policies, and build community and organizational capacity to address environmental and climate justice and racial equity.
                </Col>

            </Row>
        </Container>
    )
}


export const PortfolioSpeaking = () => {
    return (
        <Container className="about" id="about">
            <Row xs={1} sm={2}>
                <Col className="image-container">
                    <Figure>
                        <Figure.Image src="./images/about.jpg" alt="Silhouette of founder and OC1 canoe at sunset. Credit: Dennis Wise" height={400} width={400} rounded fluid />
                        <Figure.Caption>Credit: Dennis Wise</Figure.Caption>
                    </Figure>
                </Col>
                <Col className="text-center my-auto textContainerAbout">
                    Much like how the Noio was used by ocean voyagers to find land, Noio Pathways collaborates with our clients to identify their pathways to equitable solutions, builds their capacity, and helps guide them to their destination. We support organizations, communities, and leaders with community building, strategic advising, and capacity building around the integration of equity into plans, processes, programs, and policies, and build community and organizational capacity to address environmental and climate justice and racial equity.
                </Col>

            </Row>
        </Container>
    )
}

