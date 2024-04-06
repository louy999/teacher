"use client";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Timer() {
  const days = 1;

  return (
    <section className="flex justify-end shadow-lg bg-backgroundSecondary border-2 rounded-md py-4 w-full md:w-auto px-2">
      <CircularProgressbar value={days} text={`${days}days`} maxValue={30} />
    </section>
  );
}

export default Timer;
