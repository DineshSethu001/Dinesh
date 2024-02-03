import HeroImg from "../assets/img/hero.png";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Hero() {
  return (
    <section className="bg-primary font-hero-font flex flex-col md:flex-row  justifycenter px-5 py-32">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white  text-6xl">
          Hai,
          <br /> I'm <span className="text-black">D</span>inesh{" "}
          <span className="text-black">T</span>hanigaivel
          <p className="text-2xl">I am a React js Developer</p>
        </h1>
        <div className="flex py-10 justify-center">
          <a className="pr-5 hover:text-white" href="#">
            <AiOutlineLinkedin />
          </a>
          <a className="pr-5 hover:text-white" href="#">
            <AiOutlineInstagram />
          </a>
          <a className="pr-5 hover:text-white" href="#">
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
      <img className="md:w-1/3" src={HeroImg} />
    </section>
  );
}
