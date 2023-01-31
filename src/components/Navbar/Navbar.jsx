import { BiMovie } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { categoriesActions } from "../../store/categories-slice";
import Categories from "./Categories";
import { burguerActions } from "../../store/burguer-slice";

function Navbar() {
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.search.showSearchBar);
  const isCategoriesShown = useSelector(
    (state) => state.categories.isCategoriesShown
  );
  const isBurguerHit = useSelector((state) => state.burguer.isBurguerHit);

  const clickHandler = () => {
    if (showSearchBar) {
      dispatch(searchActions.toggleSearchBar());
    }
    dispatch(searchActions.clearResults());
  };

  const openCategoriesHandler = (e) => {
    e.preventDefault();
    dispatch(categoriesActions.toggleCategoriesList());
  };

  const burguerMenuClickHandler = (e) => {
    dispatch(burguerActions.toggleBurguerMenu());
  };

  const appHandler = (e) => {
    e.preventDefault();
    alert("Sorry! This functionality is a work in progress.");
  };

  const screenWidth = document.querySelector("#root").clientWidth;

  return (
    <nav className={classes.navbar}>
      <div className={classes.left}>
        {(screenWidth > 960 || !showSearchBar) && (
          <Link
            to="/"
            className={`${classes.button} ${classes.logo}`}
            onClick={clickHandler}
          >
            <BiMovie />
            Movie Catalog
          </Link>
        )}

        <div className={`${classes.button} ${classes.categoriesContainer}`}>
          <Link
            to="#"
            className={`${classes.categoriesButton} ${
              isCategoriesShown ? classes.active : ""
            }`}
            onClick={openCategoriesHandler}
            id="categoriesButton"
          >
            Categories <GoTriangleDown />
          </Link>
          {isCategoriesShown && <Categories />}
        </div>

        {/* <Link
          to="/applications"
          className={`${classes.button} ${classes.applications}`}
        >
          Applications
        </Link> */}
      </div>

      <div className={classes.right}>
        {screenWidth >= 960 && <Input />}

        <Link to="/sign-in" className={classes.button}>
          <IoPersonOutline />
          Login
        </Link>
      </div>

      <div className={classes.hamburguerMenu}>
        {screenWidth < 960 && <Input />}

        {!showSearchBar && (
          <GiHamburgerMenu
            className={classes.burguer}
            onClick={burguerMenuClickHandler}
            id="burguerMenuButton"
          />
        )}
      </div>

      <div
        id="burguerMenuOptions"
        className={`${classes["burguer-menu-options"]} ${
          isBurguerHit ? classes.active : ""
        }`}
      >
        <div className={classes.categories}>
          <Link to="/categories" onClick={burguerMenuClickHandler}>
            Categories
          </Link>
          {/* <GoTriangleDown /> */}
        </div>
        <div className={classes["applications-mob"]} onClick={appHandler}>
          Applications
        </div>
        <div className={classes.login}>
          <button className={classes["sign-in"]}>
            <Link to="/sign-in" onClick={burguerMenuClickHandler}>
              Login
            </Link>
          </button>
          <button className={classes["sign-up"]}>
            <Link to="/sign-up" onClick={burguerMenuClickHandler}>
              Register
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
