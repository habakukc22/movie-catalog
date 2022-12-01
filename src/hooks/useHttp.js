import { useState, useEffect } from "react";
const myKey = "0f2b38bc79199925ea745449cbd43368";
let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=`;

const useHttp = (searchedText) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchHomeData = async () => {
      console.log(searchUrl + searchedText);
      const response = await fetch(searchUrl + searchedText);
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };

    fetchHomeData();
  }, [searchedText]);

  return movies;
};

export default useHttp;
