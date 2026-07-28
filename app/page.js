import Navbar from "../components/navbar/Navbar"; // Atau ./components/navbar/Navbar jika sudah dibuat modular
import Header from "../components/layout/Header";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import Project from "../components/project/Project";
import Contact from "../components/contact/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </main>
  );
}