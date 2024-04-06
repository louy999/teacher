import React from "react";
import { FaDownload } from "react-icons/fa6";

function Files() {
  return (
    <div className="bg-border w-full rounded-md my-4 py-1 px-3 ">
      <div className="flex items-center border-b-2 py-3 cursor-pointer hover:border-content2 hover:text-content2 duration-300 my-5 gap-4 ">
        Files
        <FaDownload className="w-7 h-7 " />
      </div>
      <div className="flex items-center border-b-2 py-3 cursor-pointer hover:border-content2 hover:text-content2 duration-300 my-5 gap-4 ">
        Files
        <FaDownload className="w-7 h-7 " />
      </div>
      <div className="flex items-center border-b-2 py-3 cursor-pointer hover:border-content2 hover:text-content2 duration-300 my-5 gap-4 ">
        Files
        <FaDownload className="w-7 h-7 " />
      </div>
    </div>
  );
}

export default Files;
