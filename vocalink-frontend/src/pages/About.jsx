import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About VocaLink
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-4 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        VocaLink revolutionizes hiring with AI-powered voice commands, simplifying talent acquisition.
      </motion.p>
    </div>
  );
};

export default About;
