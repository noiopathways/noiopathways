import React from 'react'

function Form() {
    return (
        // TODO: update email below to jamies
        <form action="https://formsubmit.co/puakehaulani.dev@gmail.com" method="POST">
            {/* TODO: update redirect page link below */}
            <input type="hidden" name="_next" value="http://localhost:3000/"></input>
            <input type="hidden" name="_subject" value="New Website Contact Form Message"></input>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="message" placeholder="Message" required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form