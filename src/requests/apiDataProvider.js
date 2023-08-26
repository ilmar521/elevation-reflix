import { fetchOptions } from "../config/constants";

export default async function fetchMovies(url) {
  try {
    const response = await fetch(url, fetchOptions);
    const data = await response.json();
    return data.results.slice(0, 10);
  } catch (error) {
    return console.error(error);
  }
}
