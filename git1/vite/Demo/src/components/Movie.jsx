import React from "react";
import movies from "./movies";
import "./Map.css";

function Movie() {
    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <img src={movie.image} alt={movie.title} className="movie-image" />
                    <h3 className="movie-title">{movie.title}</h3>
                    <p className="movie-language">Language: {movie.language}</p>
                    <p className="movie-cost">Cost: ₹{movie.cost}</p>
                </div>
            ))}
        </div>
    );
}

export default Movie;