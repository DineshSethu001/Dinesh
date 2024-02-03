import ResumeImg from "../assets/img/resume.jpg";
export default function Resume() {
  return (
    <section className="px-5 flex flex-col md:flex-row bg-secondary">
      <div className="py-y md:w-1/2 flex justifycenter">
        <img src={ResumeImg} />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="mb-5 text-4xl  border-b-2 w-[130px] border-primary">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume here <a href="">Download</a>
          </p>
        </div>
      </div>
    </section>
  );
}
