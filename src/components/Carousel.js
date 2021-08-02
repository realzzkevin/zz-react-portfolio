import React from "react";
import TechBlog from "../assets/images/Tech-Blog.png";
import DinnerPlanner from "../assets/images/Dinner-Planner.png";
import WeatherDashboard from "../assets/images/weather-dashboard.png";
import WorkdayScheduler from "../assets/images/workday-scheduler.png";


export default function Carousel() {
    return (
        <div className="my-works-carousel mt-2 container">
            <div id="MyWorkCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#MyWorkCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#MyWorkCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#MyWorkCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#MyWorkCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <a className="carousel-item active" href="https://blooming-caverns-27099.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img src={TechBlog} className="d-block w-100" alt="dinner-planner">
                        </img>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </a>
                    <a className="carousel-item" href="https://realzzkevin.github.io/Dinner-Meal-Planner/" target="_blank" rel="noreferrer">
                        <img src={DinnerPlanner} className="d-block w-100" alt="dinner-planner"></img>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </a>
                    <a className="carousel-item" href="https://realzzkevin.github.io/Weather-Dashboard-ZZ/" target="_blank" rel="noreferrer">
                        <img src={WeatherDashboard} className="d-block w-100" alt="weather-dashboard"></img>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </a>
                    <a className="carousel-item" href="https://realzzkevin.github.io/Work-Day-Schedule-ZZ/" target="_blank" rel="noreferrer">
                        <img src={WorkdayScheduler} className="d-block w-100" alt="workday-scheduler"></img>
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </a>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#MyWorkCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#MyWorkCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}