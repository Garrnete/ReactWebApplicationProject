import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favoritesSlice";
import { motion } from "framer-motion";
import { HOUSE_COLORS } from "../utilities/houseColors";

export default function Favorites() {
    const favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch();

    return (
        <div
            style={{
                textAlign: "center",
                color: "#333",
                padding: "2rem",
                fontFamily: "Cinzel, serif",
                minHeight: "100vh",
                background:
                    "radial-gradient(circle at center, #0a0a0a 20%, #1a1a1a 100%)",
            }}
        >
            <h2 style={{ color: "#f3d16b", marginBottom: "2rem" }}>
                ⭐ Your Favorite Characters ⭐
            </h2>

            {favorites.length === 0 ? (
                <p style={{ color: "#ccc" }}>No favorites yet! Add some from your house.</p>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "1.5rem",
                    }}
                >
                    {favorites.map((char) => (
                        <motion.div
                            key={char.name}
                            whileHover={{ scale: 1.05 }}
                            className="favorite-card"
                            style={{
                                background: "#fafafa",
                                color: "#222",
                                borderRadius: "15px",
                                padding: "1rem",
                                width: "200px",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
                                borderTop: `5px solid ${HOUSE_COLORS[char.house] || "#f3d16b"
                                    }`,
                            }}
                        >
                            <img
                                src={char.image || "/placeholder.png"}
                                alt={char.name}
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                }}
                            />
                            <h3
                                style={{
                                    margin: "0.8rem 0 0.5rem 0",
                                    color:
                                        char.house === "Slytherin"
                                            ? "#6aaa4f"
                                            : HOUSE_COLORS[char.house] || "#333",
                                    fontFamily: "Cinzel, serif",
                                    fontSize: "1.1rem",
                                }}
                            >
                                {char.name}
                            </h3>
                            <p style={{ fontSize: "0.9rem", color: "#555", margin: "0.3rem 0" }}>
                                {char.house}
                            </p>

                            {/* REMOVE BUTTON */}
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => dispatch(removeFavorite(char))}
                                style={{
                                    marginTop: "0.5rem",
                                    background: "#d9534f",
                                    color: "#fff",
                                    border: "none",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "8px",
                                    cursor: "pointer",
                                    fontWeight: "bold",
                                    boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
                                }}
                            >
                                Remove
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}

