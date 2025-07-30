import { Skillcard } from "../components/Skillscard";
import { skillCategories } from "../data/skills";


export function Skills() {
    return (
        <div className="absolute w-full h-[calc(100vh-3rem)] text-white overflow-y-auto">
            <div className="text-3xl md:text-5xl text-indigo-500 font-normal :font-semibold leading-tight flex items-center ml-4 mt-4 md:ml-12 md:mt-8">Skills</div>
            <div className="h-24 w-[264px] md:h-12 md:w-96  text-base md:text-lg font-normal md:font-medium text-white flex items-start ml-4 md:ml-12 break-words text-left  "> Data Structures and Algorithms, Frontend Development, Backend Development, Database Management, System Design, LLMs, Generative AI Workflows, RAG and Cloud.</div>

            <div className="mt-20">
                {skillCategories.map((category, index) => (
                <div key={index} >
                    <p className="flex items-center ml-5 mt-5 text-white">{category.title}</p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ml-5 mt-5">
                        {category.items.map((skill, i) => (
                            <Skillcard key={i} languageName={skill.languageName} url={skill.url} />
                        ))}
                    </div>
                </div>
            ))}</div>
        </div>
    )
}