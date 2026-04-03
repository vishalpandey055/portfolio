import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {

  // 🔥 Smooth scroll with offset (fix navbar overlap)
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // 🔥 Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-400 py-12 px-6 border-t border-white/10 relative">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl font-semibold">
            Vishal Kumar Pandey
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Java Full Stack Developer 
          </p>
        </div>

        {/* CENTER NAV */}
        <div className="flex gap-6 text-sm">
          {["home", "about", "projects", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className="relative group hover:text-white transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-5 text-xl">

          <a
            href="https://github.com/vishalpandey055/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vishalkumarpandey055/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:vishalkumarpandey813@gmail.com"
            aria-label="Email"
            className="hover:text-green-400 transition hover:scale-110"
          >
            <FaEnvelope />
          </a>

        </div>
      </div>

      {/* 🔥 DIVIDER */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-8"></div>

      {/* 🔥 BOTTOM */}
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white">Vishal Kumar Pandey</span>. All rights reserved.
      </div>

      {/* 🔥 BACK TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-6 bg-cyan-500 hover:bg-cyan-400 text-black p-3 rounded-full shadow-lg transition hover:scale-110"
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
};

export default Footer;