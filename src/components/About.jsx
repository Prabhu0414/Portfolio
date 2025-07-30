import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaCode } from "react-icons/fa";

export function About() {
    return (
       <div className="p-4 text-white text-left sm:ml-40 ">
  <h2 className="text-xl font-semibold mb-4  md:ml-3">About</h2>

 <div className="">
  <a href="https://linkedin.com" className="block w-72 md:w-96 pb-4">
  <div className="h-10 flex items-center px-4 gap-4 bg-gray-800 border-b-4 border-blue-500 text-white">
    <FaLinkedin size={20} />
    Linkedin Profile
  </div>
</a>

<a href="https://github.com"  className="block w-72 md:w-96 pb-4">
  <div className="h-10 flex items-center px-4 gap-4 bg-gray-800 border-b-4 border-blue-500 text-white">
    <FaGithub size={20} />
    Github Profile
  </div>
</a>
<a href="https://leetcode.com" className="block w-72 md:w-96 pb-4">
  <div className="h-10 flex items-center gap-4 px-4 bg-gray-800 border-b-4 border-blue-500 text-white">
    <FaCode size={20} />
    Leetcode Profile
  </div>
</a>
<a href="https://twitter.com"  className="block w-72 md:w-96 pb-4">
  <div className="h-10 flex items-center px-4 gap-4 bg-gray-800 border-b-4 border-blue-500 text-white">
    <FaTwitter size={20} />
    Twitter Handle
  </div>
</a>

 </div>

</div>

    )
}