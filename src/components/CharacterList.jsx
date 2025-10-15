import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersByHouse } from "../redux/charactersSlice";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";

export default function CharacterList() {
    const dispatch = useDispatch();
    const { selectedHouse } = useSelector((state) => state.house);
    const { list, status, error } = useSelector((state) => state.characters);

    // Fetch characters whenever selectedHouse changes
    useEffect(() => {
        if (selectedHouse) {
            dispatch(fetchCharactersByHouse(selectedHouse));
        }
    }, [selectedHouse, dispatch]);

    if (!selectedHouse) {
        return (
            <p style={{ textAlign: "center", marginTop: "2rem" }}>
                Please take the quiz first to see your house members!
            </p>
        );
    }

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            style={{ marginTop: "2rem" }}
        >
            <h2>{selectedHouse} Members</h2>

            {/* Loading state */}
            {status === "loading" && (
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <p>Loading characters...</p>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        style={{
                            width: "40px",
                            height: "40px",
                            border: "4px solid #f3d16b",
                            borderTop: "4px solid transparent",
                            borderRadius: "50%",
                            margin: "1rem auto",
                        }}
                    />
                </div>
            )}

            {/* Error state */}
            {status === "failed" && (
                <p style={{ color: "red", textAlign: "center" }}>
                    Error fetching characters: {error}
                </p>
            )}

            {/* Character grid */}
            {status === "succeeded" && list.length > 0 && (
                <motion.div
                    layout
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                        gap: "1.5rem",
                        marginTop: "1rem",
                    }}
                >
                    {list.map((char) => (
                        <CharacterCard key={char.name} character={char} />
                    ))}
                </motion.div>
            )}

            {/* No characters found */}
            {status === "succeeded" && list.length === 0 && (
                <p style={{ textAlign: "center", marginTop: "2rem" }}>
                    No characters found for {selectedHouse}.
                </p>
            )}
        </motion.div>
    );
}


