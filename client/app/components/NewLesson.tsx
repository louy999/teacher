import React from "react";
import Image from "next/image";
import Link from "next/link";

function NewLesson() {
  return (
    <section className="w-full md:w-3/4 h-80 bg-border px-4 py-2  rounded-md ">
      <div className="title m-2">New Lesson</div>
      <div className="flex h-[86%] justify-start items-center overflow-hidden">
        <div className="card card-image-cover w-60 mx-3  rounded-md ">
          <Image
            width={250}
            height={250}
            src="https://source.unsplash.com/random/300x200"
            alt=""
            className=""
          />
          <Link
            href="/"
            className="card-body relative w-52 p-2 pb-6 rounded-md"
          >
            <p class="text-content2">lesson 1</p>
            <button class="btn-secondary btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewLesson;
