import React from "react";
import Carousel from "../Carousel";
import Project from '../Project';

const repos =[
    {
      title: '' ,
      description: '',
      alt:'',
      imgSrc: '',
      repoSrc: '',
      id: 1,        
    },
]

export default function Works() {

    return (
        <div>
            <Carousel />
            <div>
                {repos.map((work) => (
                    <Project title={work.title} description={work.description} imgSrc={work.imgSrc} repoSrc={work.repoSrc} key={work.id} />
                ))}
            </div>
        </div>

    );
} 