import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
