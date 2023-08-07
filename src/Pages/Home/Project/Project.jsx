import { useEffect, useState } from "react";
import Heading from "../../../components/heading";
import ProjectCard from "../ProjectCard/ProjectCard";

const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect( () =>{
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    console.log(projects);
    return (
        <div id="projects" className="py-20">
            <Heading title="My Projects"></Heading>
            <div className="grid md:grid-cols-3 gap-10 w-11/12 mx-auto">
                {
                    projects.map(project => <ProjectCard key={project.title} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Project;
