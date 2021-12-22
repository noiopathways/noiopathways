import React from 'react'

import CardGrid from '../CardGrid'
import './style.css'

function Values() {
    const valuesObject = [
        {
            title: "Value 1",
            image: "http://placekitten.com/g/200/200",
            // text: "I'm baby williamsburg id mlkshk kitsch laborum. Woke meditation cornhole hammock, kale chips try-hard distillery shabby chic flexitarian man braid austin 3 wolf moon XOXO."
        },
        {
            title: "Value 2",
            image: "http://placekitten.com/g/200/200",
            // text: "Ut proident taxidermy, celiac lorem pitchfork banh mi kale chips viral excepteur crucifix ennui. Tofu sustainable portland cupidatat consectetur lomo, occaecat selvage try-hard readymade woke small batch."
        },
        {
            title: "Value 3",
            image: "http://placekitten.com/g/200/200",
            // text: "Cloud bread ex stumptown poke next level dolore pabst you probably haven't heard of them williamsburg pop-up adipisicing wolf chillwave bicycle rights."
        }
    ]
    return (
        <div className="values" id="values">
            <h1 className="text-center">Our Values</h1>
            <CardGrid data={valuesObject} />
        </div>
    )
}

export default Values