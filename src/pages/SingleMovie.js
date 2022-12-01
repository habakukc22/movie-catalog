import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/SingleMovie/MovieDetails";
import RelatedMovies from "../components/SingleMovie/RelatedMovies";

const myKey = "0f2b38bc79199925ea745449cbd43368";
const searchUrl = (movie_id) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${myKey}`;

function SingleMovie() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(searchUrl(movieId));
      const data = await response.json();

      setMovieDetails(data);
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
      <MovieDetails movie={movieDetails} />
      <RelatedMovies movie={movieDetails} />
    </>
  );
}

export default SingleMovie;
