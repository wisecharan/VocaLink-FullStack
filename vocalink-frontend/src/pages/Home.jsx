import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.h1
        className="text-5xl font-bold uppercase tracking-widest"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        VocaLink
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The future of AI-powered recruitment
      </motion.p>
    </div>
  );
};

export default Home;
