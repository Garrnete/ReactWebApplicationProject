import React from "react";
import { motion } from "framer-motion";

const sparkleCount = 30;

export default function Background() {
    const sparkles = Array.from({ length: sparkleCount });

    return (
        <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}>
            {sparkles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: Math.random() * window.innerWidth, y: window.innerHeight + 10, opacity: 0 }}
                    animate={{ y: -20, opacity: 1 }}
                    transition={{
                        duration: 10 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "loop",
                        delay: Math.random() * 5
                    }}
                    style={{
                        width: 4 + Math.random() * 4,
                        height: 4 + Math.random() * 4,
                        borderRadius: "50%",
                        backgroundColor: "#f3d16b",
                        position: "absolute"
                    }}
                />
            ))}
        </div>
    );
}
