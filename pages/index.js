import Head from "next/head";
import Image from "next/image";
import About from "../components/UI/About";
import Hero from "../components/UI/Hero";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}
