import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
        <footer className="mt-5 footer">
            <div className="container border border-light border-1 rounded-3 py-2 bg-dark">
                <div className="row align-items-center justify-content-between" id="contact-list">
                    <div className="col-3 text-center">
                        <a href="tel:+19175356885" data-bs-toggle="tooltip" data-bs-placement="top" title="917-535-6885">
                             <span> <FontAwesomeIcon icon={faPhoneSquare} size='3x' /></span> 
                        </a>
                    </div>
                    <div className="col-3 text-center">
                        <a href="mailto:realzzkevin@gmail.com" data-bs-toggle="tooltip" data-bs-placement="top" title="realzzkevin@gmail.com">
                             <span><FontAwesomeIcon icon={faEnvelope} size="3x" /></span> 
                        </a>
                    </div>
                    <div className="col-3 text-center">
                        <a href="https://github.com/realzzkevin/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="to my github page" rel="noreferrer">
                             <span><FontAwesomeIcon icon={faGithubSquare} size="3x" /></span> 
                        </a>
                    </div>
                    <div className="col-3 text-center">
                        <a href="https://www.linkedin.com/in/zhong-zheng-782884210/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="to my Linkedin page" rel="noreferrer" >
                             <span><FontAwesomeIcon icon={faLinkedin} size="3x" /></span> 
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;