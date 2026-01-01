import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourites";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-zinc-950 text-white">
        <NavBar />

        <main className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
