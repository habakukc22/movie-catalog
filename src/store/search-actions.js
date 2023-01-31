import { searchActions } from "./search-slice";

const myKey = "0f2b38bc79199925ea745449cbd43368";
let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${myKey}&query=`;

export const searchMovie = (typedText) => {
  return async (dispatch) => {
    // console.log(typedText);

    const fetchMovie = async () => {
      const response = await fetch(searchUrl + typedText);
      const data = await response.json();

      const { results } = data;
      // console.log(results);

      return results;
    };

    let fetchedMoviesResults = await fetchMovie();

    dispatch(searchActions.updateResults({fetchedMoviesResults, typedText}));
  };
};
