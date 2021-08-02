import React from 'react';
//import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
        <header >
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <div id="nav-dropdown">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handlePageChange('About')} href="#about-me">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handlePageChange('Works')} href="#my-works">Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handlePageChange('Resume')} href="#my-resume">Resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" onClick={() => handlePageChange('Contact')} href="#contact-me">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a className="navbar-brand" href="#about-me"> <h2>Zhong Zheng</h2></a>
                    {/*<Navigation currentPage={currentPage} HandlePageChange={handlePageChange} />*/}
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
                </div>
            </nav>
        </header>
    );
}

export default Header;