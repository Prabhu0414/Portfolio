import React from "react";

export function Start({ onSelect }){
    return (
        <div className="bg-stone-900 w-36 text-xl">
            <h2 className="text-white">Start</h2>
            <div>
                <div className="text-blue-500 cursor-pointer text-md ml-12 mt-1  font-sans flex justify-start gap-1 items-center">skills...</div>
                <div className="text-blue-500 cursor-pointer text-md ml-12 mt-1  font-sans flex justify-start gap-1 items-center">projects...</div>
                <div className="text-blue-500 cursor-pointer text-md ml-12 mt-1  font-sans flex justify-start gap-1 items-center">contact...</div>
            </div>
        </div>
    )
}