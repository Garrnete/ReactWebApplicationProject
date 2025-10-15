import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Background from "./components/Background";
import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import House from "./pages/House";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Router>
      <Background />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorting" element={<Sorting />} />
        <Route path="/house" element={<House />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

