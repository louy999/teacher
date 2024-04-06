import VideoLesson from "./components/VideoLesson";
import LessonsBar from "./components/LessonsBar";
import Files from "./components/Files";
import LastComments from "./components/LastComments";
import AddComment from "./components/AddComment";
export default function Page({ params }) {
  return (
    <section className="flex  mx-auto  w-[95%] justify-center gap-6  min-h-screen items-center ">
      <div className=" md:w-2/3 relative top-20 ">
        <VideoLesson />
        <Files />
        <div className="comments flex justify-center flex-wrap bg-border rounded-md p-4">
          <LastComments />
          <LastComments />
          <AddComment />
        </div>
      </div>
      <div className="hidden md:flex justify-center items-center right w-1/3  ">
        <LessonsBar />
      </div>
    </section>
  );
}
