import classes from "./Categories.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";

// const apiKey = "0f2b38bc79199925ea745449cbd43368";
// let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;
let url = "/genre/movie/list?";

function Categories() {
  const isCategoriesShown = useSelector(
    (state) => state.categories.isCategoriesShown
  );

  let data = useHttp(url);
  
  let genres;
  if (data.genres) {
     genres = data.genres;
  }

  let categoryList;
  if (!!genres && genres.length) {
    categoryList = genres.map((genre) => (
      <div key={genre.id} className={classes.genre}>
        <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
      </div>
    ));
  } else {
    return;
  }

  return (
    <div
      id="categories"
      className={`${classes.categories} ${
        isCategoriesShown ? classes.active : ""
      }`}
    >
      {categoryList}
    </div>
  );
}

export default Categories;
