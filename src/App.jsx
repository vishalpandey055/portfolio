import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialSidebar from "./components/SocialSidebar";

// 🔥 Scroll Progress Component
const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = window.scrollY;
      setScroll((scrollTop / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 z-[9999]"
      style={{ width: `${scroll}%` }}
    />
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  // 🔥 Loader control
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // 🔥 AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white">
      {/* 🔥 Loader */}
      {loading && <Loader />}

      {/* 🔥 Scroll Progress */}
      <ScrollProgress />
      <SocialSidebar />

      {/* 🔥 Main Layout */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;