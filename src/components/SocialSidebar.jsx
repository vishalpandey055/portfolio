import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="fixed left-4 bottom-10 flex flex-col gap-5 text-xl z-50">

      <a
        href="https://github.com/vishalpandey055/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cyan-400 transition hover:scale-110"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/vishalkumarpandey055/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition hover:scale-110"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:vishalkumarpandey813@gmail.com"
        className="hover:text-green-400 transition hover:scale-110"
      >
        <FaEnvelope />
      </a>

      {/* LINE */}
      <div className="w-[2px] h-20 bg-gray-600 mx-auto"></div>
    </div>
  );
};

export default SocialSidebar;