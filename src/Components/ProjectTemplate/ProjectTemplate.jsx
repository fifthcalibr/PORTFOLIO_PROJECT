import React from "react";
import "./ProjectTemplate.scss";

function ProjectTemplate({ projectName, projectDesc, tags, img }) {
    return (
        <div className="project">
            <div className="project-details">
                <h2 className="project-name">{projectName}</h2>
                <span className="project-desc">{projectDesc}</span>
                <div className="tags">
                    <h2 className="tech-stack">Technologies Used:</h2>
                    <div className="tags-wrapper">
                        {tags.map((tag) => {
                            return (
                                <div className="tag">
                                    <h2 className="title">React</h2>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="project-image">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default ProjectTemplate;
