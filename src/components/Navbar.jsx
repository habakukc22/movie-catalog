import { BiMovie } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Input from "../layout/Input";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <div className={classes.left}>
        <Link to="/" className={classes.button}>
          <BiMovie />
          Movie Catalog
        </Link>

        <Link to="/" className={classes.button}>
          Categories
          <GoTriangleDown />
        </Link>

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
