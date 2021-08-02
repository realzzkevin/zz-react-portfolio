import React from 'react'

export default function Project(props) {
    return (
        <div className="card col-lg-3 my-3 col-md-5 border border-light border-1 rounded-1 gallery-card bg-dark">
            <img src={props.imgSrc} className="card-img-top boorder rounded-3" alt={props.alt}>
            </img>
            <div className="card-body text-light">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-text">{props.description}</p>
                <a className="btn btn-secondary" href={props.repoSrc} target="_blank" rel="noreferrer">View Repo</a>
            </div>
        </div>
    );
}