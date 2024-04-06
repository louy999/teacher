import React from "react";
import Image from "next/image";
import Link from "next/link";

function CardsChapter() {
  return (
    <div className="card card-image-cover w-60 mx-3  rounded-md ">
      <Image
        width={250}
        height={250}
        src="https://source.unsplash.com/random/300x200"
        alt=""
        className=""
      />
      <Link
        href="/lessons/123"
        className="card-body relative w-52 p-2 pb-6 rounded-md"
      >
        <p class="text-content2">lesson 1</p>
        <button class="btn-secondary btn">Learn More</button>
        <span className="absolute right-0 bottom-0 text-sm text-content2">
          12/1/2024
        </span>
      </Link>
    </div>
  );
}

export default CardsChapter;
