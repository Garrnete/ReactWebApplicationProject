import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: "#1c1b29",
        color: "#f3d16b",
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "2px solid #f3d16b"
      }}
    >
      <h1 style={{ fontFamily: "Cinzel", margin: 0 }}>🪄 Sorting Hat Portal</h1>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/">Home</Link>
        <Link to="/sorting">Quiz</Link>
        <Link to="/house">House</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
    </motion.nav>
  );
}
