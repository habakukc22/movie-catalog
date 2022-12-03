import List from "../MovieList/List";

function RelatedMovies(props) {
  let genres = props.movie.genres.map((el) => el.id).join(",");

  const category = {
    title: "Related popular movies",
    url: `/discover/movie?with_genres=${genres}&sort_by=popularity.desc`,
  };

  return (
    <>
      {!!genres && (
        <List key={Math.random()} title={category.title} url={category.url} />
      )}
    </>
  );
}

export default RelatedMovies;
