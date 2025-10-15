import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2>Welcome to the Sorting Hat Portal 🪄</h2>
      <p>Take the quiz and discover your Hogwarts house!</p>
    </motion.div>
  );
}
