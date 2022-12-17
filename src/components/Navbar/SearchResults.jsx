import { useSelector } from "react-redux";
import ListItem from "../MovieList/ListItem";
import classes from "./SearchResults.module.css";
import { ImSad } from "react-icons/im";

function SearchResults() {
  let movies = useSelector((state) => state.search.searchedMovies);
  console.log(movies);

  return (
    <>
      {movies.length === 0 && (
        <div className={classes.error}>
          <ImSad />
          No results found...
        </div>
      )}
      <div className={classes.searchResults}>
        {movies.map((movie) => (
          <ListItem movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default SearchResults;
