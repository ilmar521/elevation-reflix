import Movies from "../components/Movies";
import CatalogBar from "../components/CatalogBar";
import Modal from "../components/Modal"
import fetchGIF from "../requests/fetchGIF"
import { useState, useEffect } from "react";

export default function Catalog({ usersData, setUsersData }) {
  const [isModal, setModal] = useState(false)
  const [lastRentedMovie, setRentedMovie] = useState('')
  const [gifMovie, setGifMovie] = useState('')

  useEffect(() => {
    if (lastRentedMovie != '') {
      async function fetchGifUrl() {
        const url = await fetchGIF(lastRentedMovie);
        setGifMovie(url);
        setModal(true)
      }
      fetchGifUrl();
    }
  }, [lastRentedMovie]);

  const onClose = () => setModal(false)

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
            setModal={setModal}
            setRentedMovie={setRentedMovie}
            setGifMovie={setGifMovie}
            lastRentedMovie={lastRentedMovie}
          />
        </div>
      ) : null}

      <div className="catalog-container__all">
        <div className="catalog-header">Catalog:</div>
        <Movies
          usersData={usersData}
          setUsersData={setUsersData}
          moviesList={usersData.moviesList}
          setModal={setModal}
          setRentedMovie={setRentedMovie}
          lastRentedMovie={lastRentedMovie}
          setGifMovie={setGifMovie}
        />
      </div>
      <Modal
        visible={isModal}
        title='Sucess rent'
        content={<p>{`Rented ${lastRentedMovie} Sucessfully!`}</p>}
        movieTitle={lastRentedMovie}
        gifMovie={gifMovie}
        footer={<button onClick={onClose}>X</button>}
        onClose={onClose}
      />
    </div>
  );
}
