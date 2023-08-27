import React from "react";
import { Link } from "react-router-dom";
import { imgMovieLink } from "../config/constants";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const movieCost = 1;

export default function Movie({ movie, usersData, setUsersData }) {
  function handleRentClick() {
    const activeUser = usersData.getActiveUser();

    if (usersData.movieRented(movie.id)) {
      const updatedRentedMovies = activeUser.rentedMovies.filter(
        (rentedMovie) => rentedMovie.id !== movie.id
      );
      setUsersData({
        ...usersData,
        users: usersData.users.map((user) =>
          user.id === usersData.activeUserId
            ? {
                ...user,
                rentedMovies: updatedRentedMovies,
              }
            : user
        ),
        moviesList: [...usersData.moviesList, movie],
      });
    } else {
      if (
        activeUser.balance - movieCost >= 0 &&
        activeUser.rentedMovies.length < 10
      ) {
        setUsersData({
          ...usersData,
          users: usersData.users.map((user) =>
            user.id === usersData.activeUserId
              ? {
                  ...user,
                  balance: user.balance - movieCost,
                  rentedMovies: [...user.rentedMovies, movie],
                }
              : user
          ),
          moviesList: usersData.moviesList.filter(
            (movieFromList) => movieFromList.id != movie.id
          ),
        });
      }
    }
  }

  return (
    <div className="movie-container">
      <Link to={`/movies/${movie.id}`}>
        <img src={imgMovieLink + movie.poster_path} className="movie-image" />
      </Link>
      {usersData.activeUserId != 0 ? (
        <FontAwesomeIcon
          icon={usersData.movieRented(movie.id) ? faMinus : faPlus}
          className="icon"
          onClick={handleRentClick}
        />
      ) : null}
    </div>
  );
}
