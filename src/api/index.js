import axios from "axios";
const key = process.env.REACT_APP_API_KEY;

//Axios api conecction config
const config = {
  headers: {
    "Access-Control-Allow-Origin": "*"
  },
};
const app = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  https: config,
});

//Get all movies from api
export const getMovies = async () => {
    const res = await app.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}`);
    const data = await res.data;
    return data;
}

//Get api movie by id
export const getMovieDetails = async (id) => {
  const res = await app.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}`);
  const data = await res.data;
  return data;
}