import React from "react";
import Image from "next/image";
import { PiStudentBold } from "react-icons/pi";
import CommentsAsses from "./CommentsAsses";

function LastComments() {
  return (
    <div class="w-full mx-auto border px-6 py-4 rounded-lg my-4 relative">
      <div class="flex items-center mb-6">
        <PiStudentBold className="w-10 h-10 mx-3" />

        <div>
          <div class="text-lg font-medium ">John Doe</div>
          <div class="">2 hours ago</div>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1712004257253-90705c255214?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width={200}
        height={200}
      />
      <p class="text-lg leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lorem nulla. Donec consequat urna a tortor sagittis lobortis.
      </p>
      <div className="border-t-2 flex md:justify-end">
        <CommentsAsses />
      </div>
    </div>
  );
}
export default LastComments;
