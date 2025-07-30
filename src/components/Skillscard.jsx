import React from "react";

export function Skillcard (props) {
    return (
        <div className=" flex items-center  text-white  ">
            <div className=" 
            absolute flex items-center justify-center h-8 w-8 md:h-12 md:w-12 rounded-md  text-white
            "><img src={props.url} alt="" /></div>
            <p className="ml-10 md:ml-16 text-base md:text-lg font-normal md:font-medium pt-3 text-gray-100 pb-2" >{props.languageName}</p>
        </div>
    )
}