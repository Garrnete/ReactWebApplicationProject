import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, clearFavorites } from "../redux/favoritesSlice";

export default function Favorites() {
    const favorites = useSelector((s) => s.favorites.items);
    const dispatch = useDispatch();

    if (favorites.length === 0) return <p>No favorites yet.</p>;

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>Your Favorites</h2>
                <button onClick={() => dispatch(clearFavorites())} style={{ ...smallBtn, background: "#E57373", color: "#fff" }}>
                    Clear All
                </button>
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
                {favorites.map((f) => (
                    <div key={f.name} style={{ background: "#fff", padding: 8, borderRadius: 8, width: 200 }}>
                        <div style={{ height: 120 }}>
                            <img src={f.image || "https://via.placeholder.com/200x120?text=No+Image"} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }} />
                        </div>
                        <h4 style={{ margin: "8px 0 4px" }}>{f.name}</h4>
                        <p style={{ margin: 0 }}>{f.house}</p>
                        <button onClick={() => dispatch(removeFavorite(f))} style={{ ...smallBtn, marginTop: 8 }}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const smallBtn = {
    padding: "0.35rem 0.6rem",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
};