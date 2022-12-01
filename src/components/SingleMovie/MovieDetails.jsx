import classes from "./MovieDetails.module.css";

function MovieDetail(props) {
  const { movie } = props;

  return (
    <div className={classes.detailContainer}>
      <div className={classes.details}></div>
      <div className={classes.poster}>
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
      </div>
    </div>
  );
}

export default MovieDetail;
