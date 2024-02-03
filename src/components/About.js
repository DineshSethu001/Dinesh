import AboutImg from "../assets/img/about.png";
export default function About() {
  return (
    <section className="px-5 flex flex-col md:flex-row bg-secondary">
      <div className="py-5 md:w-1/2 ">
        <img src={AboutImg} />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="mb-5 text-4xl  border-b-2 w-[170px] border-primary">
            About Me
          </h1>
          <p className="pb-5">
            Hai my name is Dinesh.I'm a Full Stack Developer.I build beautiful
            Responsive website with React js and Tailwind.
          </p>
          <p className="pb-5">
            I'm Proficient in FrontEnd Skill Like React js,Redux, Redux Tookit
            ,Axios,Tailwind, CSS3 , SaSS and many more
          </p>
          <p className="pb-5">In Backend i know node.js and Express.js</p>
        </div>
      </div>
    </section>
  );
}
