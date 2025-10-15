import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersByHouse } from "../redux/charactersSlice";
import CharacterCard from "./CharacterCard";
import { motion } from "framer-motion";

export default function CharacterList() {
    const dispatch = useDispatch();
    const { selectedHouse } = useSelector((state) => state.house);
    const { list, status } = useSelector((state) => state.characters);

    useEffect(() => {
        if (selectedHouse) dispatch(fetchCharactersByHouse(selectedHouse));
    }, [selectedHouse, dispatch]);

    if (!selectedHouse) return null;

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
        >
            <h2>{selectedHouse} Members</h2>
            {status === "loading" && <p>Loading characters...</p>}
            {status === "failed" && <p>Failed to load characters.</p>}
            <div
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
            </div>
        </motion.div>
    );
}

