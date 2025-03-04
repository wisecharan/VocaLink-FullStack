import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Dashboard
      </motion.h1>
      <motion.p
        className="text-lg text-gray-400 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        View candidate insights with AI-powered assistance.
      </motion.p>
    </div>
  );
};

export default Dashboard;
