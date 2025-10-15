import React from "react";
import "./CharacterCard.css"; // or .module.css if you prefer

export default function CharacterCard({ name, house }) {
  return (
    <div className="character-card">
      <h2>{name}</h2>
      <p>House: {house}</p>
    </div>
  );
}