import React from "react";
import Info from "./components/Info";
import Timer from "./components/Timer";
import Chapter from "./components/Chapter";
import Exam from "./components/Exam";

function page() {
  return (
    <section className="container relative top-20 m-auto w-[95%]">
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-3">
        <Info />
        <Timer />
      </div>
      <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-3  my-10 w-full ">
        <Chapter />
        <Exam />
      </div>
    </section>
  );
}

export default page;
