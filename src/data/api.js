import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getTrendingList = async () => {
  try {
    const movies = await axios.get(
      `${baseUrl}/movie/popular?api_key=${apiKey}`
    );
    // kembalikan data.results
    return movies.data.results;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export const getTopRatedList = async () => {
  try {
    const movies = await axios.get(
      `${baseUrl}/movie/top_rated?api_key=${apiKey}`
    );
    // kembalikan data results
    return movies.data.results;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};

export const getNowPlaying = async () => {
  try {
    const movies = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}`
    );
    // kembalikan data results
    return movies.data.results;
  } catch (error) {
    console.error("Error fetching:", error);
  }
};
