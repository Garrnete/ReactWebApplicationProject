import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

export default function CharacterCard({ character }) {
  const dispatch = useDispatch();
  const favorites = useSelector((s) => s.favorites.items);
  const isFav = favorites.some((f) => f.name === character.name);

  const toggleFav = () => {
    if (isFav) dispatch(removeFavorite(character));
    else dispatch(addFavorite(character));
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: 8,
      padding: 10,
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.06)"
    }}>
      <div style={{ height: 180, marginBottom: 8 }}>
        <img
          src={character.image || "https://via.placeholder.com/250x350?text=No+Image"}
          alt={character.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 6 }}
        />
      </div>

      <h3 style={{ margin: "6px 0" }}>{character.name}</h3>
      <p style={{ margin: 0, color: "#555" }}>{character.house || "—"}</p>
      <div style={{ marginTop: 8 }}>
        <button
          onClick={toggleFav}
          style={{
            padding: "0.4rem 0.6rem",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            background: isFav ? "#FFD54F" : "#D1C4E9",
          }}
        >
          {isFav ? "★ Favorited" : "☆ Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
