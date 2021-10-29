import React from 'react'
import workday from '../../public/images/'

const Projects = () => {
    return (
        <>
            <span className="subheading">
                Portfolio
            </span>
            <div className="project-images">
                <div className="tile projects" id="featured">
                    <img src={workday} id="featured-image" alt="placeholder" />
                    {/* assets/images/work-day-scheduler-cover.jpg */}
                </div>
                <div id="project2" className="tile projects nofeature">
                    <img src="assets/images/weather-dashboard-cover-16-9.jpg" />
                </div>
                <div id="project3" className="tile projects nofeature">
                    <img src="assets/images/password-generator-cover-16-9.jpg" />
                </div>
                <div id="project4" className="tile projects nofeature">
                    <img src="assets/images/coding-quiz-cover-16-9.png" />
                </div>
                <div id="project5" className="tile projects nofeature">
                    <img src="assets/images/day-lee-laugh-cover-16-9.jpg" />
                </div>
            </div>

        </>
    )
}

export default Projects
