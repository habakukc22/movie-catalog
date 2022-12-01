import { useSelector } from "react-redux";
import ListItem from "./MovieList/ListItem";
import classes from "./SearchResults.module.css";

function SearchResults() {
  let movies = useSelector((state) => state.search.searchedMovies);
  console.log(movies);

  return (
    <div className={classes.searchResults}>
      {movies.map((movie) => (
        <ListItem movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default SearchResults;
