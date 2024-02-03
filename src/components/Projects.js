import project_img from "../assets/img/ecommerce-websites.jpg";
import project_img2 from "../assets/img/food-ecommerce.jpg";
import project_img3 from "../assets/img/website-blog.jpg";

export default function Projects() {
  return (
    <section className="px-5 py-5 flex flex-col justify-center bg-primary text-white">
      <div className="w-full ">
        <div className="flex flex-col px-10 py-5">
          <h1 className="mb-5 text-4xl border-b-2 w-[150px] border-secondary">
            Headings
          </h1>
          <p>
            These are some of my projects. i have built these with
            HTML,CSS,JavaScript,React js check them out
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={project_img} alt="" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                website build by basic html css{" "}
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={project_img2} alt="" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                website build by basic html css
              </p>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={project_img3} alt="" />
            <div className="project-desc">
              <p className="text-center px-5 py-5">
                website build by basic html css
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
