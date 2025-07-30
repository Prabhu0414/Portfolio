import React, { useEffect, useState } from "react";
import RealTimeDateTime from "./RealTimeDateTime";

export function Footer() {

    return (


        <div className="bg-blue-500 h-6 text-white flex items-center text-xs">
            <ul className="flex items-center gap-3 ">
                <li>Made In</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Tailwind</li>
            </ul>
            <div className="hidden md:block md:fixed  md:right-4">
                <ul className="flex items-center gap-3">
                    <li><RealTimeDateTime /></li>
                    <li>UTF-8</li>
                    <li>Port-5173</li>
                </ul>
            </div>
        </div>
    )
}