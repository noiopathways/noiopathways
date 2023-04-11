import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Banner from '../Banner'
import './style.css'

function Approach() {
    return (
        <Container className="approach" id="approach">
            <Row xs={1} sm={2}>
                <Col className="text-center my-auto textContainerApproach">
                    <h1 className="text-center">Our Approach</h1>
                    <p>
                        Our team is committed to supporting work that centers equity, collaboration, and partnership. Our work supports clients in identifying pathways to equitable solutions, by building capacity and leadership, and developing community-centered programs/policies. Noio Pathways works with clients across an array of issue areas, from public health to urban planning, and sectors, from local government and academia, to BIPOC-led nonprofits and small businesses. We choose to work with individuals, organizations, and communities that are dedicated to equitable processes, a learning mindset, and constructive dialogues, and are looking to dig into how to make the world a better place. We recognize that addressing systemic racism and guiding clients around how to address root causes requires a wide range of tools and approaches, as well as an understanding that it takes time and commitment to create lasting organizational and institutional change. We work to create a baseline for shared understanding, and utilize a wide array of tools and frameworks such as facilitative dialogue, power mapping analyses, the spectrum of community engagement to ownership, and coaching, all while centering and uplifting the leadership and needs of those most impacted.
                    </p>
                </Col>
                <Col className="image-container">
                    <Image src="./images/approach.jpg" height={400} width={400} rounded fluid />
                </Col>
            </Row>
        </Container >
    )
}

export default Approach