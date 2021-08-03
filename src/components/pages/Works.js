import React from "react";
import Carousel from "../Carousel";
import Project from '../Project';
import TechBlogImg from '../../assets/images/Tech-Blog.png';
import TeamProfileImg from '../../assets/images/team-profile.png';
import DinnerPlannerImg from '../../assets/images/Dinner-Planner.png';
import WeatherImg from '../../assets/images/weather-dashboard.png';
import SchedulerImg from '../../assets/images/workday-scheduler.png';
import EDatabaseImg from '../../assets/images/employees-database.png';

const repos = [
    {
        title: 'Tech Blog',
        description: 'A MVC Style Blog site',
        alt: 'Tech-Blog',
        imgSrc: TechBlogImg,
        repoSrc: 'https://github.com/realzzkevin/Tech_Blog',
        id: 1,
    },
    {
        title: 'Team Profile Generator',
        description: 'a command-line application to generates an html page base on user input.',
        alt: 'Team-Profile',
        imgSrc: TeamProfileImg,
        repoSrc: 'https://github.com/realzzkevin/Team-Profile-Generator',
        id: 2,
    },
    {
        title: 'Dinner Meal Planner',
        description: 'A weekly Dinner planner. Provides ingredients lists for mead and cocktails. Using spoonacular API and thecocktaildb API.',
        alt: 'Dinner-Planner',
        imgSrc: DinnerPlannerImg,
        repoSrc: 'https://github.com/realzzkevin/Dinner-Meal-Planner',
        id: 3,
    },
    {
        title: 'Weath Dashboard ',
        description: 'Provide current weather and next 5-day forecast. Use OpenWeather APIC Style Blog site',
        alt: 'Weath-Dashboard',
        imgSrc: WeatherImg,
        repoSrc: 'https://github.com/realzzkevin/Weather-Dashboard-ZZ',
        id: 4,
    },
    {
        title: 'Workday Scheduler',
        description: 'Plan daily work. Save events and tasks for each hour.',
        alt: 'Workday-scheduler',
        imgSrc: SchedulerImg,
        repoSrc: 'https://github.com/realzzkevin/Work-Day-Schedule-ZZ',
        id: 5,
    },
    {
        title: 'Employees Database',
        description: 'Command-line Content Management System for managing employees.',
        alt: 'employees-database',
        imgSrc: EDatabaseImg,
        repoSrc: 'https://github.com/realzzkevin/employee_database',
        id: 6,
    },
]

export default function Works() {

    return (
        <div id="my-works">
            <Carousel />
            <div className="container mt-2 works-gallery text-light">
                <div className="row justify-content-between">
                    {repos.map((work) => (
                        <Project title={work.title} description={work.description} imgSrc={work.imgSrc} repoSrc={work.repoSrc} key={work.id} />
                    ))}
                </div>
            </div>
        </div>

    );
}