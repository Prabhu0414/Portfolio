import React from "react";
import logo from "../assets/vs_logo_bg-removebg-preview.png";
import { TopButtons } from "./TopButtons";

export function Navbar({ onSelect, goBack, canGoBack }) {
  return (
    <nav className="flex items-center justify-between bg-neutral-700 text-white px-4 h-6 m-0 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <div className="flex items-start">
          <img src={logo} alt="logo" className="h-3 w-3 md:h-4 md:w-4" />
        </div>

        <div className="flex gap-2 md:gap-5 text-xs text-sm ml-2 md:ml-4 cursor-pointer">
          <div onClick={() => onSelect("index")}>About</div>
          <div onClick={() => onSelect("experince")}>Experience</div>
          <div onClick={() => onSelect("skills")}>Skills</div>
          <div onClick={() => onSelect("project")}>Project</div>
          <div onClick={() => onSelect("mail")}>Contact</div>
          <div>Hobbies</div>
        </div>
      </div>

      {/* Show TopButtons only on larger screens */}
      <div>
        <span className="hidden md:block">
          <TopButtons goBack={goBack} canGoBack={canGoBack} />
        </span>
      </div>
    </nav>
  );
}
