import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <div>
        <h2>{movie.title}</h2>
        <img src={movie.posterURL} alt={movie.title} className="movie-image" />
            <p>Rating: {movie.rating}</p>
            <Link to={`/movie/${movie.title}`}>Voir plus</Link>
        </div>
    );
    
}


export default MovieCard;
