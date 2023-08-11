import React, { useState } from "react";
import "./Projects.scss";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import admin from "../../assets/linkedin.png";

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
                projectDesc="sadas"
                tags={tagsWeather}
                img={admin}
            />

            <ProjectTemplate
                projectName="Snake Game"
                projectDesc="sadas"
                tags={tagsSnake}
                img={admin}
            />

            <ProjectTemplate
                projectName="Personal Portfolio Website"
                projectDesc="sadas"
                tags={tagsWebsite}
                img={admin}
            />
            <div></div>
        </div>
    );
}

export default Projects;
