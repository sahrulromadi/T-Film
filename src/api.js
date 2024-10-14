import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getMoviesList = async () => {
  try {
    const movies = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`
    );
    return movies.data.results;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};
