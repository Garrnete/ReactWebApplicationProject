import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";

export default function CharacterCard({ character }) {
  const dispatch = useDispatch();
  const { items: favorites } = useSelector((state) => state.favorites);
  const isFav = favorites.find((f) => f.name === character.name);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="character-card"
      style={{
        background: "white",
        borderRadius: "10px",
        padding: "1rem",
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={character.image || "https://via.placeholder.com/150"}
        alt={character.name}
        style={{ width: "100%", borderRadius: "10px", height: "250px", objectFit: "cover" }}
      />
      <h3>{character.name}</h3>
      <p>{character.house}</p>
      <button
        onClick={() =>
          isFav ? dispatch(removeFavorite(character)) : dispatch(addFavorite(character))
        }
        style={{
          backgroundColor: isFav ? "#FFD54F" : "#B39DDB",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          marginTop: "0.5rem",
        }}
      >
        {isFav ? "★ Favorited" : "☆ Favorite"}
      </button>
    </motion.div>
  );
}
