import React from 'react';

function Navigation({ currentPage, HandlePageChange }) {
    return (
        <div id="nav-bar-tabs">
            <ul className="nav nav-pills justify-content-end mb-0" id="page-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" href="#about-me" data-toggle="tab" id="home-tab">About Me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#my-works" data-toggle="tab" id="works-tab" >Works</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#my-resume" data-toggle="tab" id="resume-tab" >Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact-me" data-toggle="tab" id="contact-tab" >Contact Me</a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;