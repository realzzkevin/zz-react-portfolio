import React from 'react';
import Myphoto from '../../assets/images/myphoto.jpg';

export default function About() {
    return (
        <div className="mt-5 container-lg" id="about-me">
            <h2 className="text-light">About Me</h2>
            <div id="bio card">
                <div className="row">
                    <div className="col-md-5 d-flex align-items-center justify-content-center">
                        <img className="m-5" src={Myphoto} id="my-photo" alt="me">
                        </img>
                </div>

                        <div className="col-md-7 p-3 border border-light border-1 rounded-1 text-light">
                            <p>Hi, welcome to Zhong Zheng’s portfolio page. I graduated from the New Jersey Institute of  Technology with a Bachelor of Science in Computer Science and a minor in applied mathematics. I currently work for the Pennsylvania Liquor Control board as an assistant store manager. </p>
                            <p>Despise moving from a part-time clerk to an assistant manager within 3 short years. The longer I work in retails the more clear I realize it’s not a career path I want to spend my whole life pursuing. I want to accomplish greater goals. That’s why I’m attending UPenn’s full-stack developing Bootcamp, to switch my career to web development after my graduation.</p>
                            <p>I’m learning javaScript, CSS, and various tools for web development, I also know Java, C++, SQL. This page and the links to my projects will demonstrate my coding skills. If you enjoy my work, feel free to contact me. </p>

                        </div>
                    </div>
                </div>
        </div>
    );
}