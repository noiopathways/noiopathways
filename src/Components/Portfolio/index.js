import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/esm/Image'
import Figure from 'react-bootstrap/Figure'

import './style.css'

const projectsList = [
    {
        id:
            "0",
        description:
            "Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today.",
        img:
            "https://picsum.photos/300/200",
        title:
            "Fun Project 1"
    },
    {
        id:
            "1",
        description:
            "All of a sudden cat goes crazy one of these days i'm going to get that red dot, just you wait and see get video posted to internet for chasing red dot scratch me there, elevator butt but drink water out of the faucet. Unwrap toilet paper. Find empty spot in cupboard and sleep all day give attitude, but funny little cat chirrup noise shaking upright tail when standing next to you kitty poochy naughty running cat trip owner up in kitchen i want food, loved it, hated it, loved it, hated it. Groom forever, stretch tongue and leave it slightly out, blep meow so run around the house at 4 in the morning i shredded your linens for you scratch so owner bleeds but shake treat bag ears back wide eyed. Sniff sniff run off table persian cat jump eat fish cats woo. Attack the child eat my own ears attack dog, run away and pretend to be victim meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i donâ€™t know i canâ€™t count or at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in but sit and stare. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose refuse to leave cardboard box kitty so bird bird bird bird bird bird human why take bird out i could have eaten that ooh, are those your $250 dollar sandals?",
        img:
            "https://picsum.photos/300/200",
        link:
            "https://google.com",
        title:
            "I'm another project"
    },
    {
        id:
            "2",
        description:
            " Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me really likes hummus bite off human's toes or sitting in a box yet i want to go outside let me go outside nevermind inside is better. So you're just gonna scroll by without saying meowdy?",
        img:
            "https://picsum.photos/300/200",
        title:
            "Project 3 title here"
    },
]

const speakingList = [
    {
        id:
            "0",
        description:
            "I just saw other cats inside the house and nobody ask me before using my litter box being gorgeous with belly side up but i is playing on your console hooman human give me attention meow yet lies down cough hairball on conveniently placed pants yet rub face on owner.",
        img:
            "https://picsum.photos/300/200",
        title:
            "Speaking Engagement 1"
    },
    {
        id:
            "1",
        description:
            " Why dog in house? i'm the sole ruler of this home and its inhabitants smelly, stupid dogs, inferior furballs time for night-hunt, human freakout i like big cats and i can not lie or cat playing a fiddle in hey diddle diddle?. Skid on floor, crash into wall i do no work yet get food, shelter, and lots of stuff just like man who lives with us yet cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit and kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute?.",
        img:
            "https://picsum.photos/300/200",
        link:
            "https://google.com",
        title:
            "I'm another speaking thing"
    },
]

const projectCard = (item) => {

    return (
        <Container style={{ backgroundColor: 'linen', marginTop: 20, padding: 20 }}>
            <Row xs={1} sm={2}>
                <Col className="image-container">
                    <Image src={item.img} rounded fluid />
                </Col>
                <Col className=" my-auto textContainerAbout">
                    {item.link ? <a href={item.link}>
                        <h3>{item.title.toUpperCase()}</h3></a> : <h3>{item.title.toUpperCase()}</h3>}
                    {item.description}
                </Col>
            </Row>
        </Container>
    )
}

export const PortfolioProjects = () => {

    const RenderProjects = () => {
        const projects = projectsList.map((item) => {
            return projectCard(item)
        })
        return projects
    }

    return (
        <Container className="about" id="about">
            <h1>Projects</h1>
            <RenderProjects />
        </Container>
    )
}


export const PortfolioSpeaking = () => {
    const RenderSpeaking = () => {
        const speaking = speakingList.map((item) => {
            return projectCard(item)
        })
        return speaking
    }
    return (
        <Container className="about" id="about">
            <RenderSpeaking />
        </Container>
    )
}

