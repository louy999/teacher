import Image from "next/image";
import AlertMessage from "./components/AlertMessage";
import NewLesson from "./components/NewLesson";
import Exam from "./components/Exam";
import Chapters from "./components/Chapters";

export default function Home() {
  return (
    <div className="relative my-3 md:top-20 container mx-auto">
      <AlertMessage />
      <div className="flex flex-wrap md:flex-nowrap px-3 my-4 gap-2">
        <NewLesson />
        <Exam />
      </div>
      <Chapters number="1" />
      <Chapters number="3" />
      <Chapters number="4" />
      <Chapters number="5" />
    </div>
  );
}
