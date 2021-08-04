import React from 'react';
import resumePdf from '../../assets/download/Zhong_Zheng_resume.pdf';
import resumeImg from '../../assets/images/resume-img.png';

export default function Resume() {
    const frontEnd = ["HTML", "CSS", "JavaScript","Bootstrap", "JQuery", "React"];
    const backEnd = ["Node.js", "Express", "MySQL", "MongoDB","Heroku","GraphQL", "PWA"];

    return (
        <div className="mt-5" id="my-resume">
            <h2 className="text-light"> My Resume</h2>
            <div>
                <figure className="figure container-fluid" id="resume">
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="Click to view my resume" href={resumePdf} target="_blank" download="ZhongZhengResume" rel="noreferrer">
                        <img className="figure-img img-fluid border border-1 border-light rounded-3" src={resumeImg} alt="Click to download My resume" id="resume-link"></img>
                    </a>
                </figure>
            </div>

            <div className="text-light">
                <ul>
                    <li>
                        <h3>
                            Front-End proficiencies
                        </h3>
                        <ul>
                            {frontEnd.map((skill) => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </li>

                    <li>
                        <h3>
                            Back-End proficiencies
                        </h3>
                        <ul>
                            {backEnd.map((skill) => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}