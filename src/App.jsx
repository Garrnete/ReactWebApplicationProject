import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sorting from "./pages/Sorting";
import House from "./pages/House";
import FavoritesPage from "./pages/Favorites";

export default function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main style={{ padding: "1rem", maxWidth: 1100, margin: "0 auto" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sorting" element={<Sorting />} />
            <Route path="/house" element={<House />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
