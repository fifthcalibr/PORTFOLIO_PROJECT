import React, { useState } from "react";
import "./Projects.scss";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import weather from "../../assets/weather.jpg";
import movie from "../../assets/movie.svg"
import website from "../../assets/website.svg"
import game from "../../assets/game.svg"


function Projects() {
    const [tagsWebsite] = useState([
        "React",
        "CSS/SCSS",
        "Node",
        "JavaScript",
        "HTML"
    ]);
    
    const [tagsMovieApp] = useState([
        "React",
        "CSS",
        "Node",
        "JavaScript",
        "HTML",
        "Fetch",
        "React Router Dom",
        "React Loading Skeleton",
        "React Responsive Carousel"
    ]);

    const [tagsSnake] = useState([
        "Python",
        "PyGame",
    ]);

    return (
        <div className="projects-wrapper">
            <div></div>
            <ProjectTemplate
                projectName="Movie App"
                projectDesc="&bull; Movie Catalog: Explore upcoming, popular, and top-rated movies.
                &bull; Movie Detail Pages: Get in-depth information about each movie.
                &bull; Hero Banner: A visually striking carousel showcasing featured movies.
                &bull; Responsive Design: Seamlessly navigate on all devices for the ultimate user experience.
                &bull; Efficient Data Fetching: Utilizes Fetch and Node.js for optimized performance."
                tags={tagsMovieApp}
                img={movie}
                link= "https://github.com/fifthcalibr/movies-app"
            />

            <ProjectTemplate
                projectName="Snake Game"
                projectDesc="sadas"
                tags={tagsSnake}
                img={game}
            />

            <ProjectTemplate
                projectName="Personal Portfolio Website"
                projectDesc="&bull; Interactive Interface: Engaging user experience driven by React's capabilities.
                &bull; Project Showcase: Highlighting my work, demonstrating proficiency in various technologies.
                &bull; Skill Demonstrations: Showcasing my coding expertise and accomplishments.
                &bull; Responsive Design: CSS/SCSS and HTML combination ensures adaptability across devices."
                tags={tagsWebsite}
                img={website}
                link = "https://github.com/npm/npm/issues/3538"
            />
            <div></div>
        </div>
    );
}

export default Projects;
