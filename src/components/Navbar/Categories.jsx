import classes from "./Categories.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/useHttp";
import { categoriesActions } from "../../store/categories-slice";

let url = "/genre/movie/list?";

function Categories() {
  const dispatch = useDispatch();
  const isCategoriesShown = useSelector(
    (state) => state.categories.isCategoriesShown
  );

  let data = useHttp(url);

  let genres = data ? data.genres : undefined;

  const closeAfterClickHandler = () => {
    dispatch(categoriesActions.toggleCategoriesList());
  };

  let categoryList;
  if (genres && genres.length) {
    dispatch(categoriesActions.populateCategoryList(genres));
    categoryList = genres.map((genre) => (
      <div key={genre.id} className={classes.genre}>
        <Link to={`/genre/${genre.id}`} onClick={closeAfterClickHandler}>
          {genre.name}
        </Link>
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
