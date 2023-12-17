import React from "react"

export default () => {
    return (
        <form id="contact-form">
            <div>
                <label htmlFor="name-input">Name:</label>
                <input id="name-input" type="text" placeholder="John Smith" required/>
            </div>
            <div>
                <label htmlFor="email-input">Email Address:</label>
                <input id="email-input" type="email" placeholder="johnsmith@orchard.co" required/>
            </div>
            <div>
                <label htmlFor="subject-input">Subject:</label>
                <input id="subject-input" type="text" placeholder="Subject" required/>
            </div>
            <div>
                <label htmlFor="msg-input">Message:</label>
                <textarea id="msg-input" required></textarea>    
            </div>
            <button id="form-button" className="button">Send Message</button>
        </form>
    )
}