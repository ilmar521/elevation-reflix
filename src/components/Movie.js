import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { imgMovieLink } from "../config/constants";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const movieCost = 1;

export default function Movie({ movie, usersData, setUsersData }) {
  const [rentStatus, setRentStatus] = useState(false);

  useEffect(() => {
    const activeUser = usersData.getActiveUser();
    const rentedMovie = activeUser.rentedMovies.find(
      (rentedMovie) => rentedMovie.id === movie.id
    );

    setRentStatus(!!rentedMovie);
  }, [usersData, movie]);

  function handleRentClick() {
    const activeUser = usersData.getActiveUser();

    if (rentStatus) {
      // Return movie
      const updatedRentedMovies = activeUser.rentedMovies.filter(
        (rentedMovie) => rentedMovie.id !== movie.id
      );

      setUsersData({
        ...usersData,
        users: {
          ...usersData.users,
          [usersData.activeUserId]: {
            ...activeUser,
            balance: activeUser.balance + movieCost,
            rentedMovies: updatedRentedMovies,
          },
        },
      });
    } else {
      // Rent movie
      if (
        activeUser.balance - movieCost >= 0 &&
        activeUser.rentedMovies.length < 10
      ) {
        setUsersData({
          ...usersData,
          users: {
            ...usersData.users,
            [usersData.activeUserId]: {
              ...activeUser,
              balance: activeUser.balance - movieCost,
              rentedMovies: [...activeUser.rentedMovies, movie],
            },
          },
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
          icon={rentStatus ? faMinus : faPlus}
          className="icon"
          onClick={handleRentClick}
        />
      ) : null}
    </div>
  );
}
