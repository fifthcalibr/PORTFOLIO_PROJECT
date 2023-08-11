import React, { useState } from "react";
import "./Projects.scss";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import admin from "../../assets/linkedin.png";

function Projects() {
    const [tags] = useState([
        "React",
        "CSS/SCSS",
        "Node",
        "Express",
        "More...",
    ]);
    return (
        <div className="projects-wrapper">
            <ProjectTemplate
                projectName="Admin"
                projectDesc="sadas"
                tags={tags}
                img={admin}
            />

            <ProjectTemplate
                projectName="Admin"
                projectDesc="sadas"
                tags={tags}
                img={admin}
            />

            <ProjectTemplate
                projectName="Admin"
                projectDesc="sadas"
                tags={tags}
                img={admin}
            />
        </div>
    );
}

export default Projects;
