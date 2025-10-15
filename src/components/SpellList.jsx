import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SpellList() {
    const [spells, setSpells] = useState([]);
    const [status, setStatus] = useState("idle");

    useEffect(() => {
        const load = async () => {
            try {
                setStatus("loading");
                const res = await axios.get("https://hp-api.onrender.com/api/spells");
                setSpells(res.data || []);
                setStatus("succeeded");
            } catch (e) {
                setStatus("failed");
            }
        };
        load();
    }, []);

    if (status === "loading") return <p>Loading spells...</p>;
    if (status === "failed") return <p>Failed to load spells.</p>;

    return (
        <div>
            <h3>Spells</h3>
            <div style={{ display: "grid", gap: 8 }}>
                {spells.map((s, i) => (
                    <div key={i} style={{ padding: 8, background: "#fff", borderRadius: 6 }}>
                        <strong>{s.name}</strong>
                        <div style={{ fontSize: 14 }}>{s.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
