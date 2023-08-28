import { fetchGIFOptions } from "../config/constants";

export default async function fetchGIF(movieTitle) {
   
    try {
        console.log(movieTitle)
        const response = await fetch(`http://api.giphy.com/v1/gifs/search?q=film+${movieTitle}&api_key=4OERPiFQVFPIgF4PODJLS3jtMInz5LOH`, fetchGIFOptions);
        const jsonData = await response.json();
        return jsonData.data[0].images.fixed_height.url
      } catch (error) {
        return console.error(error);
      }

  }
