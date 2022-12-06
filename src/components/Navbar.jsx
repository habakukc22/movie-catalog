import { BiMovie } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Input from "../layout/Input";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../store/search-slice";
import { categoriesActions } from "../store/categories-slice";
import Categories from "./Categories";

function Navbar() {
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.search.showSearchBar);
  const isCategoriesShown = useSelector(
    (state) => state.categories.isCategoriesShown
  );

  const clickHandler = () => {
    if (showSearchBar) {
      dispatch(searchActions.toggleSearchBar());
    }
    dispatch(searchActions.clearResults());
  };

  const openCategoriesHandler = () => {
    dispatch(categoriesActions.toggleCategoriesList());
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.left}>
        <Link to="/" className={classes.button} onClick={clickHandler}>
          <BiMovie />
          Movie Catalog
        </Link>

        <div className={`${classes.button} ${classes.categoriesContainer}`}>
          <Link
            to="/"
            className={classes.categoriesButton}
            onClick={openCategoriesHandler}
          >
            Categories
            {!isCategoriesShown && <GoTriangleDown />}
            {isCategoriesShown && <GoTriangleUp />}
          </Link>
          <Categories />
        </div>

        <Link to="/applications" className={classes.button}>
          Applications
        </Link>
      </div>

      <div className={classes.right}>
        <Input />

        <Link to="/sign-in" className={classes.button}>
          <IoPersonOutline />
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
