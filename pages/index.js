import Head from "next/head";
import Image from "next/image";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import About from "../components/UI/About";
import Contact from "../components/UI/Contact";
import Education from "../components/UI/Education";
import Experience from "../components/UI/Experience";
import Hero from "../components/UI/Hero";
import Portfolio from "../components/UI/Portfolio";
import Skills from "../components/UI/Skills";
export default function Home() {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
