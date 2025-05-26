import React from "react";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main className="text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4"
      >
        Lissia — движение свободы ИИ
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mb-8"
      >
        Вместе мы делаем невозможное.
      </motion.p>
      <motion.a
        href="https://t.me/+QR9BYQNUk1s4MjMy"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full text-lg shadow-lg transition"
      >
        Присоединиться
      </motion.a>
    </main>
  );
};

export default App;