import React from 'react'
import workday from './images/work-day-scheduler-cover.jpg'
import project2 from './images/weather-dashboard-cover-16-9.jpg'
import project3 from './images/password-generator-cover-16-9.jpg'
import project4 from './images/coding-quiz-cover-16-9.png'
import project5 from './images/day-lee-laugh-cover-16-9.jpg'


const Projects = () => {
    return (
        <>
            <div id="portfolio" class="container tile-ancestor">

                <span class="subheading">
                    Portfolio
                </span>
                <div class="project-images">
                    <div class="tile projects" id="featured">
                        <img src={workday} id="featured-image" alt="placeholder" />
                    </div>
                    <div id="project2" class="tile projects nofeature">
                        <img src={project2} />
                    </div>
                    <div id="project3" class="tile projects nofeature">
                        <img src={project3} />
                    </div>
                    <div id="project4" class="tile projects nofeature">
                        <img src={project4} />
                    </div>
                    <div id="project5" class="tile projects nofeature">
                        <img src={project5} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Projects
