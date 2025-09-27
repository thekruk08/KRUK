import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./sections/About.jsx";
import Work from "./sections/Work.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
