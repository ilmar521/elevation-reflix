import Movie from "./Movie";

export default function Movies({ moviesList, usersData, setUsersData }) {
  return (
    <div className="movies-container">
      {moviesList.map((movie, index) => (
        <Movie
          movie={movie}
          usersData={usersData}
          setUsersData={setUsersData}
          key={index}
        />
      ))}
    </div>
  );
}
