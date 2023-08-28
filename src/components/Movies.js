import Movie from "./Movie";

export default function Movies({ moviesList, usersData, setUsersData, setModal , setRentedMovie, setGifMovie, lastRentedMovie}) {
  return (
    <div className="movies-container">
      {moviesList.map((movie, index) => (
        <Movie
          movie={movie}
          usersData={usersData}
          setUsersData={setUsersData}
          key={index}
          setModal={setModal}
          setRentedMovie={setRentedMovie}
          lastRentedMovie={lastRentedMovie}
          setGifMovie={setGifMovie}
        />
      ))}
    </div>
  );
}
