import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={headerStyle}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <h1 style={{ margin: 0 }}>Sorting Hat Portal</h1>
            </div>

            <nav style={{ display: "flex", gap: 10 }}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/sorting" style={linkStyle}>Take Quiz</Link>
                <Link to="/house" style={linkStyle}>House</Link>
                <Link to="/favorites" style={linkStyle}>Favorites</Link>
            </nav>
        </header>
    );
}

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1rem",
    background: "#6A1B9A",
    color: "#fff",
};

const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
};
