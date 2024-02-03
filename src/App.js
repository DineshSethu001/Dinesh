import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
    </>
  );
}
