import Movie from "../components/Movie";
import classes from "./Home.module.css";

import { useEffect, useState } from "react";

// const urlDefault = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${myKey}&page=1`;
// const urlMovieId = `https://api.themoviedb.org/3/movie/${movieId}?api_key=0f2b38bc79199925ea745449cbd43368`;
const myKey = "0f2b38bc79199925ea745449cbd43368";
const urlMostPopular = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${myKey}&page=1`;

function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await fetch(urlMostPopular);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchHomeData();
  }, []);

  console.log(movies);

  return (
    <div className={classes.main}>
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Home;
