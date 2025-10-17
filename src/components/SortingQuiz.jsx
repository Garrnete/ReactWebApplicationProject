import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { selectHouse } from "../redux/houseSlice";
import { useNavigate } from "react-router-dom";
import { HOUSE_COLORS } from "../utilities/houseColors";

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
        question: "What would you do if you found a lost magical artifact?",
        options: {
            Gryffindor: "Use it for good",
            Slytherin: "Study its power",
            Ravenclaw: "Research its history",
            Hufflepuff: "Return it to its owner",
        },
    },
    {
        question: "Choose a magical creature companion:",
        options: {
            Gryffindor: "Phoenix",
            Slytherin: "Basilisk",
            Ravenclaw: "Hippogriff",
            Hufflepuff: "Niffler",
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
    const [finalHouse, setFinalHouse] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAnswer = (house) => {
        const newScores = { ...scores, [house]: scores[house] + 1 };
        setScores(newScores);

        if (index + 1 < questions.length) {
            setIndex(index + 1);
        } else {
            const chosenHouse = Object.entries(newScores).sort(
                (a, b) => b[1] - a[1]
            )[0][0];
            setFinalHouse(chosenHouse);
            dispatch(selectHouse(chosenHouse));

            // Wait for animation before redirecting
            setTimeout(() => navigate("/house"), 3500);
        }
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                textAlign: "center",
                padding: "2rem",
                fontFamily: "Galindo, cursive",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {!finalHouse ? (
                <>
                    <h2>🪄 Sorting Hat Quiz</h2>

                    <motion.div
                        key={index}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginTop: "2rem" }}
                    >
                        <h3 style={{ fontFamily: "Cinzel, serif" }}>
                            {questions[index].question}
                        </h3>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: "1rem",
                                marginTop: "1rem",
                            }}
                        >
                            {Object.entries(questions[index].options).map(
                                ([house, answer]) => (
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            boxShadow: `0 0 10px ${HOUSE_COLORS[house]}`,
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        key={house}
                                        onClick={() => handleAnswer(house)}
                                        style={{
                                            background: "#f3e5f5",
                                            border: "none",
                                            padding: "1rem 2rem",
                                            borderRadius: "10px",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        {answer}
                                    </motion.button>
                                )
                            )}
                        </div>
                    </motion.div>
                </>
            ) : (
                <>
                    {/* Dimmed background overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        transition={{ duration: 1 }}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            zIndex: 1,
                        }}
                    ></motion.div>

                    {/* Sorting Hat reveal text */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            textShadow: `0 0 25px ${HOUSE_COLORS[finalHouse] || "#FFD54F"
                                }`,
                            color: HOUSE_COLORS[finalHouse] || "#FFD54F",
                        }}
                        transition={{ duration: 1 }}
                        style={{
                            position: "relative",
                            zIndex: 2,
                            marginTop: "6rem",
                            fontSize: "2rem",
                            fontFamily: "Cinzel, serif",
                        }}
                    >
                        🧙‍♂️ The Sorting Hat says...
                        <motion.h2
                            animate={{
                                scale: [1, 1.2, 1],
                                textShadow: [
                                    `0 0 10px ${HOUSE_COLORS[finalHouse] || "#FFD54F"}`,
                                    `0 0 20px ${HOUSE_COLORS[finalHouse] || "#FFD54F"}`,
                                    `0 0 10px ${HOUSE_COLORS[finalHouse] || "#FFD54F"}`,
                                ],
                            }}
                            transition={{
                                duration: 1.6,
                                repeat: Infinity,
                            }}
                        >
                            {finalHouse}!
                        </motion.h2>
                    </motion.div>
                </>
            )}
        </motion.div>
    );
}
