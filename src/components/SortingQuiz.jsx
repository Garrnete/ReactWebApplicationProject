import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { selectHouse } from "../redux/houseSlice";
import { useNavigate } from "react-router-dom";

const questions = [
    {
        question: "Which quality best describes you?",
        options: {
            Gryffindor: "Brave",
            Slytherin: "Ambitious",
            Ravenclaw: "Wise",
            Hufflepuff: "Loyal",
        },
    },
    {
        question: "Choose your favorite magical subject:",
        options: {
            Gryffindor: "Defense Against the Dark Arts",
            Slytherin: "Potions",
            Ravenclaw: "Charms",
            Hufflepuff: "Herbology",
        },
    },
    {
        question: "Pick a magical creature you admire most:",
        options: {
            Gryffindor: "Phoenix",
            Slytherin: "Basilisk",
            Ravenclaw: "Hippogriff",
            Hufflepuff: "Niffler",
        },
    },
    {
        question: "Which magical item would you choose?",
        options: {
            Gryffindor: "Sword of Gryffindor",
            Slytherin: "Locket of Slytherin",
            Ravenclaw: "Diadem of Ravenclaw",
            Hufflepuff: "Cup of Hufflepuff",
        },
    },
];

export default function SortingQuiz() {
    const [index, setIndex] = useState(0);
    const [scores, setScores] = useState({
        Gryffindor: 0,
        Slytherin: 0,
        Ravenclaw: 0,
        Hufflepuff: 0,
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAnswer = (house) => {
        const newScores = { ...scores, [house]: scores[house] + 1 };
        setScores(newScores);

        if (index + 1 < questions.length) setIndex(index + 1);
        else {
            const finalHouse = Object.entries(newScores).sort(
                (a, b) => b[1] - a[1]
            )[0][0];
            dispatch(selectHouse(finalHouse));
            navigate("/house");
        }
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <h2>✨ Sorting Hat Quiz</h2>
            <motion.div
                key={index}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: "2rem" }}
            >
                <h3>{questions[index].question}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                    {Object.entries(questions[index].options).map(([house, answer]) => (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            key={house}
                            onClick={() => handleAnswer(house)}
                            style={{
                                background: "#d1c4e9",
                                border: "none",
                                padding: "1rem 2rem",
                                borderRadius: "10px",
                                fontWeight: "bold",
                            }}
                        >
                            {answer}
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
