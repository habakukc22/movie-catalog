import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import classes from "./Card.module.css";
import { searchActions } from "../../store/search-slice";

function Movie(props) {
  const { title, vote_average, overview, backdrop_path, id } = props.movie;
  const navigate = useNavigate();
  const showSearchBar = useSelector((state) => state.search.showSearchBar);
  const dispatch = useDispatch();

  const clickHandler = () => {
    if (showSearchBar) {
      dispatch(searchActions.toggleSearchBar());
    }
    navigate(`/${id}`);
  };

  return (
    <Card className={classes.card} onClick={clickHandler}>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
      <div className={classes["movie-info"]}>
        <h3>{title}</h3>
        <span className={classes.orange}>{vote_average}</span>
      </div>
      <div className={classes.overview}>
        <h3>Overview</h3>
        {overview}
      </div>
    </Card>
  );
}

export default Movie;
