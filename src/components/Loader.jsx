import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"
      />
    </div>
  );
};

export default Loader;