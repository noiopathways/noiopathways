import React from 'react'
import { FaHandHoldingHeart, FaRegCopyright } from 'react-icons/fa';

import './style.css'

function Footer() {
    return (
        <div className="footer">
            made with <FaHandHoldingHeart /> by <a className="devLink" href="https://www.linkedin.com/in/lexiscales/" target="_blank" rel="noopener noreferrer">lexi scales</a><br />
            <FaRegCopyright /> 2026
        </div>
    )
}

export default Footer