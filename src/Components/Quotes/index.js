import React from 'react'
// import Container from 'react-bootstrap/Container'

import CardGrid from '../CardGrid'
import './style.css'

function Quotes() {
    const quotesObject = [
        {
            title: "name 1",
            image: "./images/quote1.png",
            // text: "I'm baby williamsburg id mlkshk kitsch laborum. Woke meditation rnhole hammock, kale chips try-hard distillery shabby chic flexitarian man braid austin 3 wolf moon XOXO."
        },
        {
            title: "name 2",
            image: "./images/quote2.png",
            // text: "Ut proident taxidermy, celiac lorem pitchfork banh mi kale chips viral excepteur crucifix ennui. Tofu sustainable portland cupidatat consectetur lomo, occaecat selvage try-hard readymade woke small batch."
        },
        {
            title: "name 3",
            image: "./images/quote1.png",
            // text: "Cloud bread ex stumptown poke next level dolore pabst you probably haven't heard of them williamsburg pop-up adipisicing wolf chillwave bicycle rights."
        }
    ]
    return (
        <div className="quotes" id="quotes">
            <h1 className="text-center">What People Are Saying</h1>
            <CardGrid data={quotesObject} />
        </div>
    )
}

export default Quotes