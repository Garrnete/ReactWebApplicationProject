import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersByHouse } from "./redux/charactersSlice";
import { selectHouse, resetHouse } from "./redux/houseSlice";
import { addFavorite, removeFavorite } from "./redux/favoritesSlice";

function App() {
  const dispatch = useDispatch();
  const { selectedHouse } = useSelector((state) => state.house);
  const { list, status } = useSelector((state) => state.characters);
  const { items: favorites } = useSelector((state) => state.favorites);

  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];

  const handleHouseSelect = (house) => {
    dispatch(selectHouse(house));
    dispatch(fetchCharactersByHouse(house));
  };

  const toggleFavorite = (character) => {
    const isFav = favorites.find((fav) => fav.name === character.name);
    if (isFav) dispatch(removeFavorite(character));
    else dispatch(addFavorite(character));
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", padding: "1rem" }}>
      <h1 style={{ textAlign: "center", color: "#6A1B9A" }}>
        Sorting Hat Portal 🪄
      </h1>

      {!selectedHouse ? (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>Select Your Hogwarts House</h2>
          {houses.map((house) => (
            <button
              key={house}
              onClick={() => handleHouseSelect(house)}
              style={{
                margin: "0.5rem",
                padding: "0.8rem 1.2rem",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#D1C4E9",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {house}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h2>{selectedHouse} Characters</h2>
          <button
            onClick={() => dispatch(resetHouse())}
            style={{
              backgroundColor: "#E57373",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Back to Houses
          </button>

          {status === "loading" && <p>Loading characters...</p>}
          {status === "failed" && <p>Error fetching characters.</p>}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "1.5rem",
            }}
          >
            {list.map((char) => (
              <div
                key={char.name}
                style={{
                  background: "white",
                  borderRadius: "10px",
                  padding: "1rem",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={char.image || "https://via.placeholder.com/150"}
                  alt={char.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h3>{char.name}</h3>
                <p>{char.house}</p>
                <button
                  onClick={() => toggleFavorite(char)}
                  style={{
                    backgroundColor: favorites.find((f) => f.name === char.name)
                      ? "#FFD54F"
                      : "#B39DDB",
                    color: "#222",
                    padding: "0.4rem 1rem",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                  }}
                >
                  {favorites.find((f) => f.name === char.name)
                    ? "★ Favorited"
                    : "☆ Add to Favorites"}
                </button>
              </div>
            ))}
          </div>

          {favorites.length > 0 && (
            <div style={{ marginTop: "3rem" }}>
              <h2>Your Favorites ⭐</h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {favorites.map((fav) => (
                  <div
                    key={fav.name}
                    style={{
                      backgroundColor: "#F3E5F5",
                      borderRadius: "8px",
                      padding: "0.5rem 1rem",
                    }}
                  >
                    {fav.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
