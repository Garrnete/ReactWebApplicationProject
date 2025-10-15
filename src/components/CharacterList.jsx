import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard";
import SearchBar from "./SearchBar";

export default function CharacterList() {
    const { list, status, error } = useSelector((state) => state.characters);
    const [query, setQuery] = useState("");

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return list;
        return list.filter((c) => (c.name || "").toLowerCase().includes(q));
    }, [list, query]);

    return (
        <div>
            <SearchBar value={query} onChange={(v) => setQuery(v)} placeholder="Search characters..." />
            {status === "loading" && <p>Loading characters...</p>}
            {status === "failed" && <p>Error: {error}</p>}

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: 12,
                marginTop: 12
            }}>
                {filtered.length === 0 && status === "succeeded" && <p>No characters found.</p>}
                {filtered.map((char) => (
                    <CharacterCard key={char.name} character={char} />
                ))}
            </div>
        </div>
    );
}
