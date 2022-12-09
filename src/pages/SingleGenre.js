import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListItem from "../components/MovieList/ListItem";
import useHttp from "../hooks/useHttp";
import classes from "./SingleGenre.module.css";

function SingleGenre() {
  const { genreId } = useParams();
  const categories = useSelector(state => state.categories.categories);

  let data = useHttp(
    `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`
  );
  let fetchedMovies = data ? data.results : null;
  console.log(data);
  console.log(categories)

  if (fetchedMovies) {
    return (
      <>
        <h1>{`Hey`}</h1>
        <div className={classes.singleGenre}>
          {fetchedMovies.map((movie) => (
            <ListItem movie={movie} key={movie.id} />
          ))}
        </div>
      </>
    );
  } else {
    return;
  }
}

export default SingleGenre;
