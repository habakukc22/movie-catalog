import { useNavigate } from "react-router-dom";
import Card from "../layout/Card";
import classes from "../layout/Card.module.css";

// `https://image.tmdb.org/t/p/w500${backdrop_path}`
// `https://image.tmdb.org/t/p/w1280${poster_path}`

function Movie(props) {
  const { title, vote_average, overview, backdrop_path, id } = props.movie;
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log(id);
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
