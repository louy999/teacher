import React from "react";
import { PiStudentBold } from "react-icons/pi";
import Image from "next/image";

function CommentsAsses() {
  return (
    <>
      <div class="md:w-5/6 w-full border px-6 py-4 rounded-lg my-4">
        <div class="flex items-center mb-6">
          <PiStudentBold className="w-10 h-10 mx-3" />

          <div>
            <div class="text-lg font-medium ">John Doe</div>
            <div class="">2 hours ago</div>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1520004434532-668416a08753?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={200}
          height={200}
        />
        <p class="text-lg leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          lorem nulla. Donec consequat urna a tortor sagittis lobortis.
        </p>
      </div>
    </>
  );
}

export default CommentsAsses;
