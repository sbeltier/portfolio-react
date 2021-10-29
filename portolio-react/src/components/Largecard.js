import React from 'react'

const Largecard = () => {
    return (
        <div id="about-me" className="container">
            <div id="greeting-container">
                <span id="greeting">
                    Hi, I'm Sarah!
                </span>
            </div>
            {/* <!-- Image --> */}
            <figure>
                <img src="assets/images/me2.jpg" id="photo-sb" />
            </figure>
            {/* <!-- Description --> */}
            <div id="about-me-description">
                <p>
                    <br />
                    I am a digital marketer that specializes in creating remarkable experiences for your prospects and
                    customers. As an up and coming web developer, I plan to focus on creating effortless experiences for
                    users.
                </p>
                {/* <!-- Resume --> */}
                <a href="https://drive.google.com/file/d/1ynAbxlAw2wVpTnaCZD39VoZpa9-RmLKB/view?usp=sharing"
                    target="_blank">
                    <button className="button is-light">View Resume</button>
                </a>
            </div>
        </div>
    )
}

export default Largecard