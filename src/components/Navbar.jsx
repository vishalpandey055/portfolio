import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";

      navLinks.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1
          onClick={() => handleClick("home")}
          className="text-xl font-bold text-cyan-400 cursor-pointer"
        >
          Vishal.dev
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((id) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`capitalize ${
                active === id
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {id}
            </button>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`${open ? "block" : "hidden"} md:hidden bg-black px-6`}>
        {navLinks.map((id) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className="block w-full text-left py-3 capitalize text-gray-300"
          >
            {id}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;