export const fetchOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQ1ZmJhZDZkZDhhYjdmMGRlZDE3M2Q1Y2NiNDE3YSIsInN1YiI6IjY0ZTc2ZjM2ZTg5NGE2MDExZWY3OWM5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0GM1ZRCKdxZynDxhmeCKZXlT8gXK-zqtV-oH5TyXR8",
  },
};

export const fetchGIFOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};


export const popularMoviesLink =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
export const searchMoviesLink =
  "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&sort_by=popularity.desc&dpage=1&query=";
export const imgMovieLink = "https://image.tmdb.org/t/p/w500/";

export const UsersData = {
  users: [
    {
      id: 1,
      name: "Mona",
      color: "blue",
      balance: 3,
      rentedMovies: [],
    },
    {
      id: 2,
      name: "Jasmyne",
      color: "red",
      balance: 4,
      rentedMovies: [],
    },
    {
      id: 3,
      name: "Aura",
      color: "green",
      balance: 5,
      rentedMovies: [],
    },
    {
      id: 4,
      name: "Tina",
      color: "yellow",
      balance: 6,
      rentedMovies: [],
    },
  ],
  activeUserId: 0,
  moviesList: [],


  getActiveUser() {
    return (
      this.users.find((u) => u.id === this.activeUserId) || {
        name: "None",
        balance: 0,
        rentedMovies: [],
      }
    )
  },

  movieRented(movieId, userId = this.activeUserId) {
    let user = this.users.find((u) => u.id === userId) || {
      name: "None",
      balance: 0,
      rentedMovies: [],
    };
    return user.rentedMovies.filter(
      (rentedMovie) => rentedMovie.id == movieId
    ).length != 0;  
  }

};
