import React from "react";

export function ProjectCard (props) {
    return (
        <div className="w-64 h-92 ml-8 md:w-[400px] md:h-[360px] md:ml-0 bg-gray-900 text-white rounded-xl shadow-lg overflow-hidden">
      
      <img
        src={props.url}
        alt=""
        className="h-40 w-full md:h-48 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 space-y-2">
        <h2 className="text-base  md:text-xl font-semibold">{props.projectTitle}</h2>
        

        <div className="flex items-start mt-2 text-gray-300">
          {/* <div className="w-5 h-5 mt-0.5 mr-2 text-indigo-400">  </div> */}
          <p className="text-sm text-left ">
            {props.projectdiscription}
          </p>
        </div>
      </div>
    </div>
    )
}