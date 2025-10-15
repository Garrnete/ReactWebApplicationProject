import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ textAlign: "center", marginTop: 24 }}>
            <h2>Welcome to the Sorting Hat Portal</h2>
            <p>Take the Sorting Hat quiz, discover your house, and explore its characters.</p>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, marginTop: 16 }}>
                <Link to="/sorting"><button style={primaryBtn}>Take the Quiz</button></Link>
                <Link to="/favorites"><button style={secondaryBtn}>View Favorites</button></Link>
            </div>
        </div>
    );
}

const primaryBtn = {
    background: "#6A1B9A",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: 6,
    cursor: "pointer",
};

const secondaryBtn = {
    background: "#eee",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: 6,
    cursor: "pointer",
};
