import React from 'react'
import gmail from './images/gmail.png'
import linkedin from './images/linkedin-square.png'
import github from './images/github-icon.png'

const Footer = () => {
    return (

        <div id="social-handles" class="container">
            <div id="social-logos" class="container">
                <a href="https://www.linkedin.com/in/sarah-beltier/">
                    <img src={linkedin} class="image is-48x48" alt="LinkedIn Logo" />
                </a>
                <a href="https://github.com/sbeltier">
                    <img src={github} class="image is-48x48" alt="GitHub Logo" />
                </a>
                <a href="mailto:s.nicole.beltier@gmail.com">
                    <img src={gmail} class="image is-48x48" alt="Gmail Logo" />
                </a>
            </div>
        </div>
    )
}

export default Footer
