import React from 'react'
// import Container from 'react-bootstrap/Container'

import CardGrid from '../CardGrid'
import './style.css'

function Quotes() {
    const quotesObject = [
        {
            title: "Dinah Wilson",
            image: "./images/quote1.png",
            text: "Founder & Facilitator of Kent Cultural Diversity Initiative Group (KC-DIG)"
        },
        {
            title: "Lara Whitely Binder",
            image: "./images/quote2.png",
            text: "Local government climate preparedness professional"
        },
        {
            title: "Kim Yu, MPH",
            image: "./images/quote3.png",
            text: "Health Equity Consultant"
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