import React from 'react'

function Form() {
    return (
        <form action="https://formsubmit.co/puakehaulani.dev@gmail.com" method="POST">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="text" name="message" placeholder="Message" required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form