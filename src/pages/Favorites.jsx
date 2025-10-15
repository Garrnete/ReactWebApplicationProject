import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { HOUSE_COLORS } from "../utilities/houseColors";

export default function Favorites() {
  const { items } = useSelector((state) => state.favorites);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Your Favorites ⭐</h2>

      {items.length === 0 && <p>No favorites yet.</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
        }}
      >
        {items.map((fav) => (
          <motion.div
            key={fav.name}
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 15px ${HOUSE_COLORS[fav.house] || "#FFD54F"}`,
            }}
            style={{
              backgroundColor: "#ede7f6",  // light card background
              borderRadius: "12px",
              padding: "1rem",
              textAlign: "center",
              color: HOUSE_COLORS[fav.house] || "#333", // dark gray fallback
              fontWeight: "bold",
              fontFamily: "Galindo, cursive",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            {fav.name}
            <p style={{ fontSize: "0.85rem", marginTop: "0.3rem" }}>{fav.house}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

