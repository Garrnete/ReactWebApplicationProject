import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
                textAlign: "center",
            }}
        >
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                    color: "#f3d16b",
                    fontFamily: "Cinzel, serif",
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    backgroundColor: "rgba(70, 130, 180, 0.3)", // soft blue background
                    padding: "0.8rem 1.5rem",
                    borderRadius: "12px",
                    boxShadow: "0 0 15px rgba(70, 130, 180, 0.6)", // blue glow
                }}
            >
                Welcome to the Sorting Hat Portal 🪄✨
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{
                    color: "#ffffff",
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                }}
            >
                Take the{" "}
                <motion.span
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0 0 10px #ffd700, 0 0 20px #ffecb3, 0 0 30px #fff176",
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        to="/sorting"
                        style={{
                            color: "#f3d16b",
                            textDecoration: "underline",
                            fontWeight: "700",
                        }}
                    >
                        QUIZ
                    </Link>
                </motion.span>{" "}
                and discover your Hogwarts house!
            </motion.p>
        </motion.div>
    );
}


