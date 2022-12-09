import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ListItem from "../components/MovieList/ListItem";
import useHttp from "../hooks/useHttp";
import { categoriesActions } from "../store/categories-slice";
import classes from "./SingleGenre.module.css";

function SingleGenre() {
  const { genreId } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  //fetch categories list and populate categories state case it's empty
  let categoriesData = useHttp("/genre/movie/list?");
  let genres = categoriesData ? categoriesData.genres : undefined;
  if (genres && categories.length === 0) {
    dispatch(categoriesActions.populateCategoryList(genres));
  }

  let movieGenreTitle = "";
  for (let genre of categories) {
    if (genre.id === +genreId) {
      movieGenreTitle = genre.name;
    }
  }

  let data = useHttp(
    `/discover/movie?with_genres=${genreId}&sort_by=popularity.desc`
  );
  let fetchedMovies = data ? data.results : null;

  if (fetchedMovies) {
    return (
      <>
        <h1 className={classes.genreTitle}>{movieGenreTitle}</h1>
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
