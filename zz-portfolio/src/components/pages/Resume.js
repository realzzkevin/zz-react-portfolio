import React from 'react';
import resumePdf from '../../assets/download/Zhong_Zheng_resume.pdf';

export default function Resume() {

    return (
        <div className="mt-5" id="my-resume">
            <h2 className="text-light"> My Resume</h2>
            <div>
                <figure className="figure container-fluid" id="resume">
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Click to view my resume" href={resumePdf} target="_blank" download="ZhongZhengResume" rel="noreferrer">
                        <img className="figure-img img-fluid border border-1 border-light rounded-3" src="./assets/images/resume-img.png" alt="Click to download My resume" id="resume-link"></img>
                    </a>
                </figure>
            </div>


        </div>
    );
}