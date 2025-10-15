import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { removeFavorite } from "../redux/favoritesSlice";
import { HOUSE_COLORS } from "../utilities/houseColors";

export default function Favorites() {
    const { items } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{ textAlign: "center", padding: "2rem" }}
        >
            <h2
                style={{
                    marginBottom: "1.5rem",
                    color: "#f3d16b",
                    fontFamily: "Cinzel, serif",
                    letterSpacing: "1px",
                }}
            >
                Your Favorites ⭐
            </h2>

            {items.length === 0 && (
                <p style={{ color: "#ccc", fontFamily: "Cinzel, serif" }}>
                    No favorites yet.
                </p>
            )}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                    gap: "1.5rem",
                    justifyItems: "center",
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
                            backgroundColor: "#ede7f6",
                            borderRadius: "15px",
                            padding: "1rem",
                            textAlign: "center",
                            color: HOUSE_COLORS[fav.house] || "#333",
                            fontWeight: "bold",
                            fontFamily: "Galindo, cursive",
                            width: "180px",
                            transition: "all 0.3s ease",
                            position: "relative",
                        }}
                    >
                        <h3 style={{ margin: "0.3rem 0", color: "#2c2c2c" }}>{fav.name}</h3>
                        <p
                            style={{
                                fontSize: "0.85rem",
                                marginTop: "0.2rem",
                                color:
                                    fav.house === "Slytherin"
                                        ? "#6aaa4f"
                                        : HOUSE_COLORS[fav.house] || "#333",
                            }}
                        >
                            {fav.house}
                        </p>

                        {/* 🪄 Remove Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => dispatch(removeFavorite(fav.name))}
                            style={{
                                marginTop: "0.6rem",
                                backgroundColor: "#c0392b",
                                border: "none",
                                color: "white",
                                padding: "0.4rem 0.8rem",
                                borderRadius: "8px",
                                cursor: "pointer",
                                fontSize: "0.50rem",
                                fontFamily: "Cinzel, serif",
                                fontWeight: "bold",
                                boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
                            }}
                        >
                            ✖ Remove
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
