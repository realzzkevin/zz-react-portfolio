import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <div id="nav-bar-tabs">
            <ul className="nav nav-pills justify-content-end mb-0" id="page-tab" role="tablist">
                <li className="nav-item">
                    <a
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        href="#About" data-toggle="tab" id="home-tab"
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        onClick={() => handlePageChange('Works')}
                        className={currentPage === 'Works' ? 'nav-link active' : 'nav-link'}
                        href="#Works" data-toggle="tab" id="works-tab"
                    >
                        Works
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        href="#contact" data-toggle="tab" id="contact-tab"
                    >
                        Contact Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        href="#my-resume" data-toggle="tab" id="resume-tab"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;