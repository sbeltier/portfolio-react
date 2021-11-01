import React from 'react'
import { useEffect } from 'react'
import workDayP from './images/_p-work-day-scheduler.png'
import project2 from './images/_p-weather-dashboard.png'
import project3 from './images/_p-password-generator.png'
import project4 from './images/_p-coding-quiz.png'
import project5 from './images/_p-the-day-lee-laugh.jpg'


const Modal = () => {
useEffect(() => {
    let projects = document.getElementsByClassName('projects')
    console.log('entering Modal')
    console.log('entering Modal')

    // Add Event Listener to Projects
    for (let j = 0; j < projects.length; j++) {
        projects[j].addEventListener('click', function () {
            let modalID = "project" + (j + 1) + "-modal"
            let modal = document.getElementById(modalID)
            modal.classList.remove('hide')
            modal.classList.add('show')

            // Close out Modal
            let span = document.getElementsByClassName('close')[j]
            span.addEventListener('click', function () {
                modal.classList.remove('show')
                modal.classList.add('hide')

            })
        })
    }
}) 
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
                            <img src={project2} alt="Screenshot of weather dashboard" />
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

            {/* <!--Project 3--> */}
            <div id="project3-modal" className="modal hide container">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div className="modal-container">
                        <p className="subheading2">Password Generator</p>
                        <figure className="project-screenshots is-9by16">
                            <img src={project3} alt="Screenshot of Password Generator" />
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
            {/* <!--Project 4--> */}
            <div id="project4-modal" className="modal hide container">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div className="modal-container">
                        <p className="subheading2">Coding Quiz</p>
                        <figure className="project-screenshots is-9by16">
                            <img src={project4} alt="Screenshot of Coding Quiz" />
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
            {/* <!--Project 5--> */}
            <div id="project5-modal" className="modal hide container">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div className="modal-container">
                        <p className="subheading2">The Day-Lee Laugh</p>
                        <figure className="project-screenshots is-9by16">
                            <img src={project5} alt="Screenshot of The Day-Lee Laugh" />
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
