import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function Favorites() {
    const { items } = useSelector((state) => state.favorites);

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <h2>Your Favorites ⭐</h2>
            {items.length === 0 && <p>No favorites yet.</p>}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                {items.map((fav) => (
                    <div
                        key={fav.name}
                        style={{
                            backgroundColor: "#ede7f6",
                            borderRadius: "8px",
                            padding: "1rem",
                        }}
                    >
                        {fav.name}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
