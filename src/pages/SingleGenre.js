import { useParams } from "react-router-dom";
import ListItem from "../components/MovieList/ListItem"
import useHttp from "../hooks/useHttp";
import classes from "./SingleGenre.module.css";

function SingleGenre() {
  const { genreId } = useParams();

  let fetchedMovies = useHttp(
    `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=1`
  );

  if (fetchedMovies.length === 0) {
    return;
  }

  return (
    <div className={classes.singleGenre}>
      {fetchedMovies.map((movie) => (
        <ListItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default SingleGenre;
