import React from "react"
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import './style.css'

function NotFound() {
    return (
        <div className="notFound">
            <Image src="./images/404.png" fluid />

            {/* <Button>go</Button> */}

        </div>


    )
}

export default NotFound