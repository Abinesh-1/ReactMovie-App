import { useMovieContext } from "../contexts/MovieContext";
import React from "react";

function MovieCard({ movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  }

  return (
    <div className="group bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      
      {/* Poster */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end items-start p-3">
          <button
            onClick={onFavoriteClick}
            className={`text-2xl sm:text-3xl transition-transform duration-200 hover:scale-110 ${
              favorite ? "text-red-500" : "text-white"
            }`}
          >
            ♥
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4 text-white">
        <h3 className="text-sm sm:text-base md:text-lg font-semibold truncate">
          {movie.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">
          {movie.release_date?.split("-")[0]}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
