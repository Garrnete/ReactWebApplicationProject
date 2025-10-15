import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export default function HouseDashboard() {
    const { selectedHouse } = useSelector((state) => state.house);

    if (!selectedHouse)
        return <p style={{ textAlign: "center" }}>Please take the quiz first!</p>;

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2>🏰 Welcome to {selectedHouse}</h2>
            <p>
                Each house values different traits. Discover the members and history of your
                house below!
            </p>
        </motion.div>
    );
}

