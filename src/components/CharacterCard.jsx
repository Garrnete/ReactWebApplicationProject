import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/favoritesSlice";
import { HOUSE_COLORS } from "../utilities/houseColors";

export default function CharacterCard({ character }) {
  const dispatch = useDispatch();
  const { items: favorites } = useSelector((state) => state.favorites);
  const isFav = favorites.find((f) => f.name === character.name);

  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${HOUSE_COLORS[character.house] || "#FFD54F"}` }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: "#2c2b3c", // dark magical card
        borderRadius: "12px",
        padding: "1rem",
        textAlign: "center",
        borderTop: `4px solid ${HOUSE_COLORS[character.house] || "#f3d16b"}`,
        color: "#f3f3f3",
        fontFamily: "Galindo, cursive",
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      <img
        src={character.image || "https://via.placeholder.com/200x250"}
        alt={character.name}
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "0.5rem",
        }}
      />
      <h3
        style={{
          margin: "0.5rem 0",
          fontFamily: "Cinzel, serif",
          color:
            character.house === "Slytherin"
              ? "#6aaa4f" // lighter green for readability
              : HOUSE_COLORS[character.house] || "#f3d16b",

        }}
      >
        {character.name}
      </h3>



      <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>{character.house}</p>
      <button
        onClick={() =>
          isFav ? dispatch(removeFavorite(character)) : dispatch(addFavorite(character))
        }
        style={{
          backgroundColor: isFav ? "#FFD54F" : "#B39DDB",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          fontWeight: "bold",
          color: "#1c1b29",
          cursor: "pointer",
        }}
      >
        {isFav ? "★ Favorited" : "☆ Favorite"}
      </button>
    </motion.div>
  );
}

