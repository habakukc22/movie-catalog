import { AiFillStar } from "react-icons/ai";
import { FiPlay } from "react-icons/fi";
import { BsPlusLg } from "react-icons/bs";
import classes from "./MovieDetails.module.css";

function MovieDetail(props) {
  const { movie } = props;
  let genresList = movie.genres.map((el) => el.name).join(", ");
  let spokenLanguage = movie.spoken_languages[0].english_name;
  let overview = movie.overview;
  let votes = movie.vote_average.toFixed(1);
  let dateObj = new Date(movie.release_date);
  let releaseDate = `${
    dateObj.getMonth() + 1
  }/${dateObj.getDate()}/${dateObj.getFullYear()}`;

  return (
    <div className={classes.detailContainer}>
      <div className={classes.details}>
        <h1>
          <span className={classes.title}>{movie.title}</span>
          <AiFillStar /> {votes}
        </h1>
        <span className={classes.property}>
          <h3>Release date:</h3>
          <p>{releaseDate}</p>
        </span>
        <span className={classes.property}>
          <h3>Spoken language:</h3>
          <p>{spokenLanguage}</p>
        </span>
        <span className={classes.property}>
          <h3>Genres:</h3>
          <p>{genresList}</p>
        </span>

        <div className={classes.buttons}>
          <button className={classes.play}>
            <FiPlay />
            <span>Play</span>
          </button>
          <button className={classes.add}>
            <BsPlusLg />
            <span>My list</span>
          </button>
        </div>

        <span className={classes.propertyOverview}>
          <h3>Overview:</h3>
          <p>{overview}</p>
        </span>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
    </div>
  );
}

export default MovieDetail;
