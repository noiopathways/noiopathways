import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import CardGrid from '../CardGrid'
import './style.css'

function Team() {
    return (
        <Container className="team" id="team">
            <Row xs={1} sm={2}>
                <Col className="my-auto textContainerTeam">
                    <h1 className="text-center">About Our Founder</h1>
                    <p>Jamie 真理恵 Stroble is the owner and founder of Noio Pathways LLC, and seeks to build community and organizational capacity to address environmental and climate justice, racial equity, and equitable public processes. She is an experienced policy advocate, trainer/educator, and community organizer with over 15 years of experience working in environmental justice-related fields, including community development, racial equity, food justice, air quality & environmental health, youth programming, leadership development, and immigrants & refugee programs.
                        <br /><br />
                        As a movement builder, she is always looking for ways to support organizations and new leaders, build community capacity, and strategize around affecting change. She has led curriculum design, built leadership development programs, and facilitated workshops for all ages from high school students to seniors. Jamie has a strong background in the incorporation of equity in systems, plans, and policies, and most recently led the groundbreaking development of the first community-driven climate justice framework (<a href="https://your.kingcounty.gov/dnrp/climate/documents/scap-2020-approved/2020-scap-sustainable-and-resilient-frontline-communities-section.pdf">Section II: Sustainable & Resilient Frontline Communities</a>) for King County's <a href="https://kingcounty.gov/services/environment/climate/actions-strategies/strategic-climate-action-plan.aspx">2020 Strategic Climate Action Plan</a>. She served as the primary advisor for climate equity throughout the plan and the lead author for the climate justice section, and created the <a href="https://kingcounty.gov/services/environment/climate/actions-strategies/strategic-climate-action-plan/equity-task-force.aspx">Climate Equity Community Task Force</a> to center frontline communities and BIPOC voices in community-driven climate policy-making.
                    </p>
                </Col>
                <Col className="image-container">
                    <Image src="./images/founder.png" height={400} width={400} rounded fluid />
                </Col>
            </Row>
            She currently serves on the boards of the EarthLab at UW, the Healthy King County Coalition Built Environment Workgroup, Asian Pacific Islander Coalition Advocating for Health (APICAT), the Minnesota Climate Adaptation Partnership, and the Puget Sound Climate Preparedness Collaborative, and co-chairs the Seattle Planning Commission. From working with youth in the Chinatown/International District to leading leadership development programming for an API community organization, she has also long been committed to building the next generation of BIPOC environmental leaders and mentoring of young people of color in public service and environmental fields. Jamie is currently based in Seattle on the current and ancestral lands of the Duwamish tribe and Coast Salish people, and was raised in Hawai'i on the lands of the Kānaka Maoli.

        </Container>
    )
}

export default Team

export const Collaborators = () => {
    const collaborators = [
        {
            title: "Dinah Wilson",
            image: "https://i.pravatar.cc/300?img=31",
            text: "Founder & Facilitator of Kent Cultural Diversity Initiative Group (KC-DIG)"
        },
        {
            title: "Lexi Scales",
            image: "./images/collaborators/hammah.JPEG",
            text: "Native Hawaiian, Web Developer",
            link: 'https://lexi.scalesdev.com'
        },
        {
            title: "Kim Yu, MPH",
            image: "https://i.pravatar.cc/300?img=49",
            text: "Health Equity Consultant"
        }
    ]
    return (
        <Container className='team' >
            <h1 className="text-center">Collaborators</h1>
            <p>If one examines precultural libertarianism, one is faced with a choice: either accept rationalism or conclude that context is a product of the masses, given that Marx’s essay on precultural libertarianism is invalid. The subject is contextualised into a precapitalist dematerialism that includes culture as a reality.</p>
            <CardGrid data={collaborators} />
        </Container>
    )
}

export const PartnerOrgs = () => {
    const handleDragStart = (e) => e.preventDefault();
    const items = [
        <img src="./images/partners/berk.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/friends-little-saigon.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/healthy-kc-coalition.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/kc-climate-action.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/kc-dnr.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/khmer-community.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/leadership-tomorrow.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/puget-sound-sage.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/sage-leaders.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/sdot.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/sea-planning-community.png" width={200} onDragStart={handleDragStart} />,
        <img src="./images/partners/uw.png" width={200} onDragStart={handleDragStart} />,
    ];

    return (
        <Container className='team'>
            <h1 className='text-center'>Partner Organizations</h1>
            <AliceCarousel items={items} paddingLeft={10} paddingRight={10} disableDotsControls mouseTracking infinite responsive={
                {
                    0: {
                        items: 2,
                    },
                    640: {
                        items: 3,
                        itemsFit: 'cover',
                    },
                    1007: {
                        items: 3.5,
                        itemsFit: 'cover',
                    },
                    1024: {
                        items: 5,
                        itemsFit: 'cover',
                    }
                }
            }
            />
        </Container>
    )
}