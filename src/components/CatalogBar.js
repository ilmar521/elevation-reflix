import React, { useState, useEffect } from "react";
import Balance from "./Balance";
import fetchMovies from "../requests/apiDataProvider";
import { popularMoviesLink, searchMoviesLink } from "../config/constants";

export default function CatalogBar({ usersData, setUsersData }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchMoviesData() {
      const link = searchValue === "" ? popularMoviesLink : searchMoviesLink + searchValue;
      const response = await fetchMovies(link);
      setUsersData({ ...usersData, moviesList: response });
    }

    fetchMoviesData();
  }, [searchValue, usersData, setUsersData]);

  return (
    <div className="catalog-bar-component">
      <input
        placeholder="Search"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Balance usersData={usersData} />
    </div>
  );
}
