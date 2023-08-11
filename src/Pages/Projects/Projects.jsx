import React, { useState } from "react";
import "./Projects.scss";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import weather from "../../assets/weather.jpg";


function Projects() {
    const [tagsWebsite] = useState([
        "React",
        "CSS/SCSS",
        "Node",
        "JavaScript",
        "HTML"
    ]);
    
    const [tagsWeather] = useState([
        "React",
        "CSS/SCSS",
        "Node",
        "JavaScript",
        "HTML",
        "Express"
    ]);

    const [tagsSnake] = useState([
        "Python",
        "PyGame",
    ]);
    return (
        <div className="projects-wrapper">
            <div></div>
            <ProjectTemplate
                projectName="Weather App"
                projectDesc="sss"
                tags={tagsWeather}
                img={weather}
            />

            <ProjectTemplate
                projectName="Snake Game"
                projectDesc="sadas"
                tags={tagsSnake}
                img={weather}
            />

            <ProjectTemplate
                projectName="Personal Portfolio Website"
                projectDesc="&bull; Interactive Interface: Engaging user experience driven by React's capabilities.
                &bull; Project Showcase: Highlighting my work, demonstrating proficiency in various technologies.
                &bull; Skill Demonstrations: Showcasing my coding expertise and accomplishments.
                &bull; Responsive Design: CSS/SCSS and HTML combination ensures adaptability across devices."
                tags={tagsWebsite}
                img={weather}
                link = "https://github.com/npm/npm/issues/3538"
            />
            <div></div>
        </div>
    );
}

export default Projects;
