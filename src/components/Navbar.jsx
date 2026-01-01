import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-zinc-900 text-white px-4 sm:px-8 py-4 shadow-md">
      <div className="flex justify-between items-center">

        {/* Logo / Brand */}
        <div className="text-2xl sm:text-3xl font-oswald font-bold">
          <Link to="/">Movie App</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/favourites"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            Favourites
          </Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-4 mt-2 md:hidden text-lg">
          <Link
            to="/"
            className="hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/favourites"
            className="hover:text-blue-500 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Favourites
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
