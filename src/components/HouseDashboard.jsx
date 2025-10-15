import React from "react";
import CharacterList from "./CharacterList";
import { useSelector } from "react-redux";

const HOUSE_INFO = {
  Gryffindor: {
    color: "#7C1E1E",
    traits: ["Bravery", "Courage", "Chivalry"],
    crest: "🦁",
  },
  Slytherin: {
    color: "#2E6A2E",
    traits: ["Ambition", "Cunning", "Resourcefulness"],
    crest: "🐍",
  },
  Ravenclaw: {
    color: "#1F4E79",
    traits: ["Wisdom", "Learning", "Creativity"],
    crest: "🦅",
  },
  Hufflepuff: {
    color: "#B8860B",
    traits: ["Loyalty", "Patience", "Fairness"],
    crest: "🦡",
  },
};

export default function HouseDashboard() {
  const selectedHouse = useSelector((state) => state.house.selectedHouse);

  if (!selectedHouse) {
    return <p>Please take the Sorting Hat quiz or select a house first.</p>;
  }

  const info = HOUSE_INFO[selectedHouse] || {};

  return (
    <section>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "#fff",
        padding: 12,
        borderRadius: 8,
      }}>
        <div style={{ fontSize: 48 }}>{info.crest}</div>
        <div>
          <h2 style={{ margin: 0 }}>{selectedHouse}</h2>
          <p style={{ margin: 0 }}>{info.traits?.join(" • ")}</p>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <CharacterList />
      </div>
    </section>
  );
}
