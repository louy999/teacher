import React from "react";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

function Info() {
  return (
    <section className="flex shadow-lg bg-backgroundSecondary border-2 py-4 px-2 rounded-lg justify-center flex-wrap md:w-2/4">
      <div className="rounded-full p-2 border-2">
        <Image
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        ></Image>
      </div>
      {/* <RxAvatar className="w-40 h-40" /> */}

      <div className=" flex flex-wrap gap-3  w-full">
        <div className="w-full p-2">
          <span className=" border-content2 border-2 px-2 py-1 rounded-md ">
            name: louy
          </span>
        </div>
        <span className="px-2 py-1 border-content2 border-2 rounded-md">
          number: 01029939183
        </span>
        <span className="px-2 py-1 border-content2 border-2 rounded-md">
          stage: 2st
        </span>
      </div>
    </section>
  );
}

export default Info;
