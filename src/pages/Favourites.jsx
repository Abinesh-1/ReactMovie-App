import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import React from "react";

function Favorites() {
  const { favorites } = useMovieContext();

  if (!favorites || favorites.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-oswald text-white mb-3">
          No Favorite Movies Yet
        </h2>
        <p className="text-gray-400 max-w-xs sm:max-w-md">
          Start adding movies to your favorites and they will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-oswald text-white mb-6">
        Your Favorites
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
