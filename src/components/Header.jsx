import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="header"
            style={{
                background: "#4b2c82",
                color: "white",
                padding: "1rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h1 style={{ fontFamily: "Cinzel" }}>🪄 Sorting Hat Portal</h1>
            <div style={{ display: "flex", gap: "1.5rem" }}>
                <Link to="/">Home</Link>
                <Link to="/sorting">Quiz</Link>
                <Link to="/house">House</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </motion.nav>
    );
};

export default Header;
