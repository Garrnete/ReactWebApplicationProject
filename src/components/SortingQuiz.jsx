import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectHouse } from "../redux/houseSlice";
import { fetchCharactersByHouse } from "../redux/charactersSlice";
import { useNavigate } from "react-router-dom";

/**
 * Simple quiz: 4 questions, each answer maps to a house score.
 * On submit, pick max score house. If tie, pick random among top.
 */

const QUESTIONS = [
    {
        q: "You see an injustice. What do you do?",
        a: [
            { text: "Confront it bravely", house: "Gryffindor" },
            { text: "Plan a clever way to fix it", house: "Ravenclaw" },
            { text: "Work behind the scenes", house: "Slytherin" },
            { text: "Support those harmed", house: "Hufflepuff" },
        ],
    },
    {
        q: "Pick a hobby:",
        a: [
            { text: "Dueling", house: "Gryffindor" },
            { text: "Reading and puzzles", house: "Ravenclaw" },
            { text: "Networking, clubs", house: "Slytherin" },
            { text: "Gardening or baking", house: "Hufflepuff" },
        ],
    },
    {
        q: "What's most important to you?",
        a: [
            { text: "Courage", house: "Gryffindor" },
            { text: "Wisdom", house: "Ravenclaw" },
            { text: "Ambition", house: "Slytherin" },
            { text: "Loyalty", house: "Hufflepuff" },
        ],
    },
    {
        q: "Choose a pet:",
        a: [
            { text: "Owl", house: "Ravenclaw" },
            { text: "Toad", house: "Hufflepuff" },
            { text: "Cat", house: "Slytherin" },
            { text: "Phoenix", house: "Gryffindor" },
        ],
    },
];

export default function SortingQuiz() {
    const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSelect = (qIndex, house) => {
        const copy = [...answers];
        copy[qIndex] = house;
        setAnswers(copy);
    };

    const handleSubmit = () => {
        if (answers.includes(null)) {
            setError("Please answer all questions.");
            return;
        }
        // tally
        const tally = {};
        answers.forEach((h) => (tally[h] = (tally[h] || 0) + 1));
        let max = 0;
        Object.values(tally).forEach((v) => (max = Math.max(max, v)));
        const topHouses = Object.keys(tally).filter((h) => tally[h] === max);
        const chosen = topHouses[Math.floor(Math.random() * topHouses.length)];

        // dispatch selection and fetch characters
        dispatch(selectHouse(chosen));
        dispatch(fetchCharactersByHouse(chosen));
        navigate("/house");
    };

    const handleRandom = () => {
        const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
        const chosen = houses[Math.floor(Math.random() * houses.length)];
        dispatch(selectHouse(chosen));
        dispatch(fetchCharactersByHouse(chosen));
        navigate("/house");
    };

    return (
        <div>
            <h2>Sorting Hat Quiz</h2>
            <p>Answer the short quiz or let the Sorting Hat choose for you.</p>

            <div style={{ display: "grid", gap: 16 }}>
                {QUESTIONS.map((item, i) => (
                    <div key={i} style={{ padding: 12, borderRadius: 8, background: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.06)" }}>
                        <p style={{ margin: 0, fontWeight: 600 }}>{i + 1}. {item.q}</p>
                        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                            {item.a.map((opt, idx) => {
                                const isSelected = answers[i] === opt.house;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(i, opt.house)}
                                        style={{
                                            padding: "0.45rem 0.75rem",
                                            borderRadius: 6,
                                            border: isSelected ? "2px solid #6A1B9A" : "1px solid #ddd",
                                            background: isSelected ? "#f3e6ff" : "#fafafa",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {opt.text}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
                <button onClick={handleSubmit} style={primaryBtn}>Get Sorted</button>
                <button onClick={handleRandom} style={secondaryBtn}>Random Assignment</button>
            </div>
        </div>
    );
}

const primaryBtn = {
    background: "#6A1B9A",
    color: "#fff",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: 6,
    cursor: "pointer",
};

const secondaryBtn = {
    background: "#eee",
    border: "none",
    padding: "0.6rem 1rem",
    borderRadius: 6,
    cursor: "pointer",
};
