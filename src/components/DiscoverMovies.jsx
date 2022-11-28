import { useState, useEffect } from "react";

import Movie from "./Movie";
import classes from "./DiscoverMovies.module.css";

const urlDefault = "https://api.themoviedb.org/3";
const myKey = "0f2b38bc79199925ea745449cbd43368";

function DiscoverMovies(props) {
  const { title, url } = props;

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await fetch(urlDefault + url + `&api_key=${myKey}`);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchHomeData();
  }, [url]);

  console.log(movies);

  return (
    <>
      <h3>{title}</h3>
      <div className={classes.category}>
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default DiscoverMovies;
