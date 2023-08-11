import React from "react";
import "./ProjectTemplate.scss";
import Tag from "../Tag/Tag";

function ProjectTemplate({ projectName, projectDesc, tags, img ,link }) {
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
                                <Tag key = {projectName} title = {tag}/>
                            );
                        })}
                    </div>
                </div>
                <a href= {link} target="_blank" className="github-link"><h2>Github Link</h2></a>
            </div>
            <div className="project-image">
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default ProjectTemplate;
