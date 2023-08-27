import Movies from "../components/Movies";
import CatalogBar from "../components/CatalogBar";

export default function Catalog({ usersData, setUsersData }) {
  return (
    <div className="catalog-container">
      <CatalogBar usersData={usersData} setUsersData={setUsersData} />
      {usersData.getActiveUser().rentedMovies.length !== 0 ? (
        <div className="catalog-container__rented">
          <div className="catalog-header">Rented:</div>
          <Movies
            usersData={usersData}
            setUsersData={setUsersData}
            moviesList={usersData.getActiveUser().rentedMovies}
          />
        </div>
      ) : null}

      <div className="catalog-container__all">
        <div className="catalog-header">Catalog:</div>
        <Movies
          usersData={usersData}
          setUsersData={setUsersData}
          moviesList={usersData.moviesList}
        />
      </div>
    </div>
  );
}
