import React from "react";
import { useParams } from "react-router";
import { imgMovieLink } from "../config/constants";

export default function MovieDescription({ usersData }) {
  const { id } = useParams();
  const movie = usersData.moviesList.find((movie) => movie.id == id);

  return (
    <div className="movie-description-container">
      <div>{`${movie.original_title} (${movie.release_date.slice(0, 4)})`}</div>
      <img
        src={imgMovieLink + movie.poster_path}
        className="movie-image"
        alt={movie.original_title}
      />
      <div>{movie.overview}</div>
    </div>
  );
}
