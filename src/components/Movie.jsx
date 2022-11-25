import Card from "../layout/Card";
import classes from '../layout/Card.module.css'

function Movie(props) {
  const { title, vote_average, overview, poster_path } = props.movie;
  return (
    <Card className={classes.card}>
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
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
