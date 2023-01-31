import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import classes from "./Card.module.css";
import { searchActions } from "../../store/search-slice";

function Movie(props) {
  const { title, vote_average, overview, backdrop_path, id } = props.movie;
  const navigate = useNavigate();
  const showSearchBar = useSelector((state) => state.search.showSearchBar);
  const isSearching = useSelector((state) => state.search.isSearching);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (showSearchBar) {
      dispatch(searchActions.toggleSearchBar());
    }
    if (isSearching) {
      dispatch(searchActions.clearResults());
    }
    navigate(`/${id}`);
  };

  return (
    <Card className={classes.card} onClick={clickHandler}>
      <div className={classes.movieImg}>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />

        <div className={classes.overview}>{overview}</div>
      </div>

      <div className={classes["movie-info"]}>
        <h3>{title}</h3>
        <span className={classes.orange}>{vote_average}</span>
      </div>
    </Card>
  );
}

export default Movie;
