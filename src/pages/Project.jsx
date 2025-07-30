import { ProjectCard } from "../components/ProjectCard";
import { projectData } from "../data/projects";

export function Project() {
    return (
        <div className="absolute w-full h-[calc(100vh-3rem)] text-white overflow-y-auto">
            <div className="text-md ml-5 mt-2 font-semibold   md:text-5xl flex items-start md:ml-12 md:font-bold leading-tight text-indigo-500">Projects</div>
            <div className="ml-5 mt-1 font-medium md:p-2 flex items-start md:ml-10 text-gray-400 text-md  ">College and Side Projects for practice.</div>
            <div className="grid gird-cols-1 mt-5 md:grid md:grid-cols-3 absolute md:mt-12 md:ml-8 gap-5" >
               {projectData.map((project, index) => (
                <div key={index}>
                    <ProjectCard 
                        url={project.url}
                        projectTitle={project.projectTitle}
                        projectdiscription={project.projectdiscription}
                    />
                </div>
               ))}
            </div>
        </div>
    )
}