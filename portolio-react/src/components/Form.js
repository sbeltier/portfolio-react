import React from 'react'

const Form = () => {
    return (
        <>
            <div id="contact-me-container" className="container">
                <span className="subheading">Contact Me:</span>
                <form id="contact">
                    <div className="field">
                        <label for="name" className="label">Name:</label>
                        <input name="name" className="input is-small" type="text" placeholder="e.g Vladimir Pugtin" />
                    </div>
                    <div className="field">
                        <label for="email" className="label">Email:</label>
                        <input name="email" className="input is-small" type="email" placeholder="e.g vpugtin@gmail.com" />
                    </div>
                    <div className="field">
                        <label for="message" className="label">Message:</label>
                        <textarea className="textarea is-small" name="message"></textarea>
                    </div>
                </form>
                <button className="button is-dark">Submit</button>
            </div>

        </>
    )
}

export default Form
