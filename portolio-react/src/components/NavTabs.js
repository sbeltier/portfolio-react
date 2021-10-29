import React from "react"

const NavTabs = ({ currentPage, handlePageChange }) => {
    return (
        <div id="name-nav" className="container box">
            {/* <!-- Name/Logo --> */}
            <div id="name">Sarah Nicole Beltier</div>
            {/* <!-- Navigation Bar--> */}
            <div id="nav-bar">
                <ul>
                    <li>
                        <a href="#about-me" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1ynAbxlAw2wVpTnaCZD39VoZpa9-RmLKB/view?usp=sharing"
                            target="_blank" className='nav-link'>
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handlePageChange('ContactMe')} className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
                            Contact Me
                            </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavTabs


