import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {

  const contacts = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      link: "https://github.com/vishalpandey055",
      label: "View my repositories"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/vishalkumarpandey055/",
      label: "Connect with me"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      link: "mailto:vishalkumarpandey055@gmail.com",
      label: "Send me an email"
    }
  ];

  return (

    <section
      id="contact"
      className="relative py-24 bg-gray-100 dark:bg-slate-900 transition-colors duration-300 overflow-hidden"
    >

      {/* Background glow */}
      <div className="absolute w-80 h-80 bg-blue-500 blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-500 blur-3xl opacity-20 bottom-10 right-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-6 
        bg-gradient-to-r from-blue-500 to-purple-600 
        bg-clip-text text-transparent">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Feel free to connect with me for collaboration or opportunities.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {contacts.map((contact, index) => (

            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg
              hover:shadow-2xl transition transform hover:-translate-y-2
              flex flex-col items-center text-center"
            >

              <div className="text-4xl text-blue-500 mb-4">
                {contact.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {contact.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {contact.label}
              </p>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Contact;