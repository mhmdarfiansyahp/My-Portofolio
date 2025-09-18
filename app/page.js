'use client';
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Project />
    <Contact />
    <Footer />
    </>
  );
}
