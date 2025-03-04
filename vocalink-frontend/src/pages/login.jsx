import { motion } from "framer-motion";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Login
      </motion.h1>
      <input
        type="text"
        placeholder="Username"
        className="mt-4 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        className="mt-4 px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded"
      />
      <motion.button
        className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Sign In
      </motion.button>
    </div>
  );
};

export default Login;
