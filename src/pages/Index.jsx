import React from "react";
import { Name } from "../components/Name";
import { Start } from "../components/Start";
import { About } from "../components/About";

export function Index() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
            {/* Left Section */}
            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute top-8 left-8 md:top-16 md:left-16">
                    <Name />
                </div>
                <div className="absolute mt-8 top-[120px] left-[70px] md:top-[220px] md:left-[140px]">
                    <Start />
                </div>
            </div>

            {/* Right Section (About) */}
            <div className="flex items-center mt-20 md:mt-0 mb-24 ">
                <About />
            </div>
        </div>
    );
}
