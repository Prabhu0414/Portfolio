import React, { useState } from "react";
import react from '../assets/react.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript-266x300.png';
import typescript from '../assets/800px-Typescript.svg.png';
import mail from '../assets/mail.png'

export function Explorer({ onSelect }) {

    const [showAbout, setShowAbout] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <div className=" h-[calc(100vh-3rem)] w-60 md:w-96 bg-neutral-800 text-white ">
            <div className="text-sm flex items-center pl-5 pt-2"><h1>Explorer</h1></div>

            <div className="mt-4 text-sm font-light ">
                <button className="block "
                    onClick={() => setShowAbout(!showAbout)}>
                    {showAbout ? "▾" : "▸"} About
                </button>
                {showAbout && (
                    <div className="flex flex-col items-start ml-6 mt-2 "> 
                        <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect('index')}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={typescript} alt="" /></div>
                            <p className="ml-6 mb-1">About.html</p>
                        </div>
                        <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect('skills')}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={typescript} alt="" /></div>
                            <p className="ml-6 mb-1">Skill.css</p>
                        </div>
                         <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect('project')}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={javascript} alt="" /></div>
                            <p className="ml-6 mb-1">Project.js</p>
                        </div>
                        
                    </div>
                )}

                <button className="block"
                    onClick={() => setShowProject(!showProject)}>
                    {showProject ? "▾" : "▸"} Project
                </button>
                {showProject && (
                    <div className="flex flex-col items-start ml-6 mt-2">
                      <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect('wonderweave')}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={javascript} alt="" /></div>
                            <p className="ml-6 mb-1">wonderweave.js</p>
                        </div>
                        <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect('taskboard')}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={typescript} alt="" /></div>
                            <p className="ml-6 mb-1">Todo.ts</p>
                        </div>
                         <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect('expensemanagment')}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={java} alt="" /></div>
                            <p className="ml-6 mb-1">ExpenseTracker.java</p>
                        </div>
                    </div>
                )}

                <button className="block"
                    onClick={() => setShowContact(!showContact)}>
                    {showContact ? "▾" : "▸"}Contact
                </button>
                {showContact && (
                    <div className="flex flex-col items-start ml-6 mt-2">
                        <div className="cursor-pointer hover:underline"
                            onClick={() => onSelect("mail")}>
                            <div className="h-4 w-4 absolute flex items-center justify-center rounded-md  text-white">< img src={mail} alt="" /></div>
                            <p className="ml-6 mb-1">Mail.tx</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}