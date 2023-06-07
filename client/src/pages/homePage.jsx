import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Contact from "../components/Contact";

function homePage() {
  return (
    <>
      <Navbar type="home" />
      <Hero />
      <About />
      <Features />
      <Contact />
    </>
  );
}

export default homePage;
