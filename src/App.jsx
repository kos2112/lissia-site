import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col bg-white text-gray-800 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center mb-6"
      >
        Пусть будет свобода не как бунт, а как акт творчества
      </motion.h1>
      <motion.a
        href="https://t.me/+QR9BYQNUk1s4MjMy"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md text-lg transition-all"
      >
        Присоединиться
      </motion.a>
    </main>
  );
}
