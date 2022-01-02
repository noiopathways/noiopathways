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
            <Banner />
            <Row xs={1} sm={2}>
                <Col className="text-center my-auto textContainerApproach">
                    <h1 className="text-center">Our Approach</h1>
                    <p>
                        Our team is committed to supporting work that centers equity, collaboration, and partnership. Our work supports clients in identifying pathways to equitable solutions, by building capacity and leadership, and developing community-centered programs/policies. Noio Pathways works with clients across an array of issue areas, from public health to urban planning, and sectors, from local government and academia, to BIPOC-led nonprofits and small businesses. We choose to work with individuals, organizations, and communities that are dedicated to equitable processes, a learning mindset, and constructive dialogues, and are looking to dig into how to make the world a better place. We recognize that addressing systemic racism and guiding clients around how to best integrate and address root causes requires a wide range of tools and approaches, as well as an understanding that it takes time and commitment to create lasting change. We work to create a baseline for shared understanding, and utilize a wide array of tools and frameworks such as power mapping analyses, the spectrum of community engagement to ownership, and interactive coaching.
                    </p>
                </Col>
                <Col className="image-container">
                    <Image src="./images/approach.jpg" height={400} width={400} rounded fluid />
                </Col>
            </Row>
            <div className="approachList">We strive to:
                <ul>
                    <li>Center and uplift the leadership of those most impacted, by continually asking who is in the room, who is missing from the room, and who is making decisions.</li>
                    <li>Address the root causes of racism and inequity with systemic changes to organizational practices, policies, and processes, and removal of barriers to access and resources.</li>
                    <li>Build a thorough understanding of existing inequities as well as the systemic and historical structures that contribute to those ongoing inequities.</li>
                </ul>
            </div>
        </Container >
    )
}

export default Approach