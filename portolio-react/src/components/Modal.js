import React from 'react'
import workDayP from './images/_p-work-day-scheduler.png'

const Modal = () => {
    return (
        <>
            <div id="project1-modal" className="modal hide container">
            <div className="modal-content">
                <span className="close">&times;</span>
                <div className="modal-container">
                    <p className="subheading2">Work Day Scheduler</p>
                    <figure className="project-screenshots is-9by16">
                        <img src={workDayP} alt="Screenshot of work day scheduler" />
                    </figure>
                    <p>
                        Productivity begins with planning, and the most effective way to do that is by time blocking. Check
                        out my Work Day Scheduler, designed to help you
                        make your 9-5 a bit easier.
                    </p>
                    <a href="https://sbeltier.github.io/time-block-calendar/" alt="Link to Work Day Scheduler">
                        <button className="is-light">View Project</button>
                    </a>
                    <a href="https://github.com/sbeltier/time-block-calendar" alt="Link to Weather Dashboard Repo">
                        <button className="is-light">View Repo</button>
                    </a>
                </div>
            </div>
        </div>
        
        <div id="project2-modal" className="modal hide container">
            <div className="modal-content">
                <span className="close">&times;</span>
                <div className="modal-container">
                    <p className="subheading2">Weather Dashboard</p>
                    <figure className="project-screenshots is-9by16">
                        <img src="assets/images/_p-weather-dashboard.png" alt="Screenshot of weather dashboard" />
                    </figure>
                    <p>
                        Knowing what weather to expect before vacationing is a traveling MUST! This dashboard allows users
                        to see the weekly forecast of their destination. Check it out below:
                    </p>
                    <a href="https://sbeltier.github.io/weather-dashboard/" alt="Link to Weather Dashboard Project">
                        <button className="is-light">View Project</button>
                    </a>
                    <a href="https://github.com/sbeltier/weather-dashboard" alt="Link to Weather Dashboard Repo">
                        <button className="is-light">View Repo</button>
                    </a>
                </div>
            </div>
        </div>
        
        {/* <!--Project 3--> */ }
    <div id="project3-modal" className="modal hide container">
        <div className="modal-content">
            <span className="close">&times;</span>
            <div className="modal-container">
                <p className="subheading2">Password Generator</p>
                <figure className="project-screenshots is-9by16">
                    <img src="assets/images/_p-password-generator.png" alt="Screenshot of Password Generator" />
                </figure>
                <p>
                    Cybercrime is on the rise— are you prepared for it? A strong password should have at least 15
                    characters and a variation of lowercase, uppercase, numbers, and special characters. This generator
                    will help you fight against cybercrime by make random, secure passwords easier.
                </p>
                <a href="https://sbeltier.github.io/password-generator/index.html"
                    alt="Link to Password Generator Project">
                    <button className="is-light">View Project</button>
                </a>
                <a href="https://github.com/sbeltier/password-generator" alt="Link to Password Generator Repo">
                    <button className="is-light">View Repo</button>
                </a>
            </div>
        </div>
    </div>
    {/* <!--Project 4--> */ }
    <div id="project4-modal" className="modal hide container">
        <div className="modal-content">
            <span className="close">&times;</span>
            <div className="modal-container">
                <p className="subheading2">Coding Quiz</p>
                <figure className="project-screenshots is-9by16">
                    <img src="assets/images/_p-coding-quiz.png" alt="Screenshot of Coding Quiz" />
                </figure>
                <p>So you think you know how to code? Test your knowledge with this five question coding quiz. You have
                    75 seconds to complete it, but be warned— each wrong answer subtracts 10 seconds from your time!</p>
                <a href="https://sbeltier.github.io/coding-quiz/" alt="Link to Coding Quiz">
                    <button className="is-light">View Project</button>
                </a>
                <a href="https://github.com/sbeltier/coding-quiz" alt="Link to Coding Quiz Repo">
                    <button className="is-light">View Repo</button>
                </a>
            </div>
        </div>
    </div>
    {/* <!--Project 5--> */ }
    <div id="project5-modal" className="modal hide container">
        <div className="modal-content">
            <span className="close">&times;</span>
            <div className="modal-container">
                <p className="subheading2">The Day-Lee Laugh</p>
                <figure className="project-screenshots is-9by16">
                    <img src="assets/images/_p-the-day-lee-laugh.jfif" alt="Screenshot of The Day-Lee Laugh" />
                </figure>
                <p>Laughter keeps the heart young. Inspired by the awesomeness of instructor Lee, The DailyLee Laugh is
                    a webpage built for users looking for a good laugh.
                </p>
                <a href="https://sbeltier.github.io/group-project-1-the-daily-laugh/" alt="Link to Work Day Scheduler">
                    <button className="is-light">View Project</button>

                </a>
                <a href="https://github.com/sbeltier/group-project-1-the-daily-laugh" alt="Link to Day-Lee Laugh">
                    <button className="is-light">View Repo</button>
                </a>
            </div>
        </div>
    </div>
    </>
    )
}

export default Modal
