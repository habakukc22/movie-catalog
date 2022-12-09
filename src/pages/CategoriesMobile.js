import List from "../components/MovieList/List";
import useHttp from "../hooks/useHttp";
// import classes from "./CategoriesMobile.module.css";

let url = "/genre/movie/list?";

function CategoriesMobile() {
  let data = useHttp(url);
  let genres = data ? data.genres : undefined;

  let moviesCategories;
  if (genres) {
    moviesCategories = genres.map((category) => {
      return {
        title: category.name,
        url: `/discover/movie?with_genres=${category.id}&sort_by=popularity.desc`,
      };
    });
  }

  if (moviesCategories) {
    return (
      <div>
        {moviesCategories.map((category) => (
          <List key={Math.random()} title={category.title} url={category.url} />
        ))}
      </div>
    );
  } else {
    return;
  }
}

export default CategoriesMobile;
