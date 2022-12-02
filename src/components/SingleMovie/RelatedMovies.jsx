import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { List } from "../MovieList/List";

const myKey = "0f2b38bc79199925ea745449cbd43368";
let url = `https://api.themoviedb.org/3/discover/movie?api_key=${myKey}&sort_by=popularity.desc&page=1&with_genres=`;

function RelatedMovies(props) {
  const { movieId } = useParams();
  const [relatedMovies, setRelatedMovies] = useState([]);
  console.log(props.movie);

  let genres = props.movie.genres.map((el) => el.id).join(",");
  console.log(genres);

  useEffect(() => {
    const fetchRelatedMovie = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setRelatedMovies(data.results);
    };

    fetchRelatedMovie();
  }, [movieId]);

  if (relatedMovies.length != 0) {
    console.log(relatedMovies);
    let bla = relatedMovies.map((category) => (
      <List key={Math.random()} title={category.title} url={category.url} />
    ));
  }

  return <>{relatedMovies.length !== 0 && bla}</>;
}

export default RelatedMovies;
