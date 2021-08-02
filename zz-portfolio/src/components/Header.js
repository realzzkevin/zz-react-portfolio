import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, HandlePageChange }) {
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
                                    <a className="nav-link" href="#about-me">About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#my-works">Works</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#my-resume">Resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact-me">Contact Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a className="navbar-brand" href="#about-me"> <h2>Zhong Zheng</h2></a>
                    <Navigation currentPage={currentPage} HandlePageChange={HandlePageChange} />
                </div>
            </nav>
        </header>
    );
}

export default Header;