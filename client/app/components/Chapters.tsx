"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import CardsChapter from "./CardsChapter";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Chapters({ number }) {
  const scrollContainer = useRef(null);

  const scroll = (scrollOffset) => {
    scrollContainer.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="w-[98%] h-96 bg-border px-4 py-2 mx-auto rounded-md my-4 relative">
      <div className="title m-2 capitalize">chapter {number}</div>
      <div className="flex h-[86%] items-center">
        <button
          onClick={() => scroll(-100)}
          className="scroll-btn left-scroll-btn"
        >
          <IoArrowBackCircleOutline className="w-10 h-10 hover:text-black hover:bg-white rounded-lg duration-300" />
        </button>
        <div
          ref={scrollContainer}
          className="flex h-full justify-start items-center overflow-auto hide-scrollbar"
        >
          <CardsChapter />
          <CardsChapter />
        </div>
        <button
          onClick={() => scroll(100)}
          className="scroll-btn right-scroll-btn absolute right-0"
        >
          <IoArrowForwardCircleOutline className="w-10 h-10 hover:text-black hover:bg-white rounded-lg duration-300" />
        </button>
      </div>
    </section>
  );
}

export default Chapters;
