import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ VALIDATION FUNCTION
  const validateForm = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.includes("@")) return "Valid email required";
    if (form.message.length < 10) return "Message must be at least 10 characters";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus(`❌ ${error}`);
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });

    } catch (err) {
      setStatus("❌ Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6"
    >
      <h2 className="text-4xl md:text-5xl text-center mb-14 font-bold">
        Contact Me
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg"
      >
        {/* NAME */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-6 p-3 rounded bg-white/10 border border-white/10 focus:outline-none focus:border-cyan-400 transition"
        />

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-green-400 hover:opacity-90 transition duration-300 py-3 rounded font-semibold"
        >
          {loading ? "Sending..." : "Send Message "}
        </button>

        {/* STATUS */}
        {status && (
          <p className="text-center mt-4 text-sm text-gray-300">
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;