import Head from "next/head";
import Image from "next/image";
import About from "../components/UI/About";
import Hero from "../components/UI/Hero";
import Portfolio from "../components/UI/Portfolio";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
    </>
  );
}
