import { useParams } from "react-router-dom";
import MovieDetails from "../components/SingleMovie/MovieDetails";
import RelatedMovies from "../components/SingleMovie/RelatedMovies";
import useHttp from "../hooks/useHttp";

function SingleMovie() {
  const { movieId } = useParams();
  let url = `/movie/${movieId}?`;

  let movieDetails = useHttp(url);

  let isValidData =
    !!movieDetails &&
    JSON.stringify(movieDetails) !== JSON.stringify({}) &&
    JSON.stringify(movieDetails) !== JSON.stringify([]);

  return (
    <>
      {isValidData && <MovieDetails movie={movieDetails} />}
      {isValidData && <RelatedMovies movie={movieDetails} />}
    </>
  );
}

export default SingleMovie;
