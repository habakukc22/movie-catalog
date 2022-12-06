import { useState, useEffect } from "react";
const myKey = "0f2b38bc79199925ea745449cbd43368";
let defaultURL = "https://api.themoviedb.org/3";

const useHttp = (searchedText) => {
  const [movies, setMovies] = useState([]);

  let url = defaultURL + searchedText + `&api_key=${myKey}`;

  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.results);
    };

    fetchHomeData();
  }, [url]);

  return movies;
};

export default useHttp;
