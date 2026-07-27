import Navbar from "./components/navbar/Navbar"; // Atau ./components/navbar/Navbar jika sudah dibuat modular
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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