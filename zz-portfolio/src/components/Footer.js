import React from 'react';

function Footer () {
    return (
        <footer>
            <div className="container border border-light border-1 rounded-3 py-2 bg-dark">
                <div className="row align-items-center justify-content-between" id="contact-list">
                    <div className="col-3 text-center">
                        <a href="tel:+19175356885" data-bs-toggle="tooltip" data-bs-placement="top" title="917-535-6885">
                             <span className="fas fa-phone-square-alt fa-3x"></span> 
                        </a>
                    </div>
                    <div className="col-3 text-center">
                        <a href="mailto:realzzkevin@gmail.com" data-bs-toggle="tooltip" data-bs-placement="top" title="realzzkevin@gmail.com">
                             <span className="far fa-envelope fa-3x"></span> 
                        </a>
                    </div>
                    <div className="col-3 text-center">
                        <a href="https://github.com/realzzkevin/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="to my github page" rel="noreferrer">
                             <span className="fab fa-github-square fa-3x"></span> 
                        </a>
                    </div>
                    <div className="col-3 text-center">
                        <a href="https://www.linkedin.com/in/zhong-zheng-782884210/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" title="to my Linkedin page" rel="noreferrer" >
                             <span className="fab fa-linkedin fa-3x"></span> 
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
    
}

export default Footer;