import { BiMovie } from "react-icons/bi";
// import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>

      <div className={classes.left}>

        <div className={classes.logo}>
          <BiMovie />
          <p>Movie Catalog</p>
        </div>

        <div>Categories</div>

      </div>

      <div className={classes.right}>Right</div>
    </nav>
  );
}

export default Navbar;
