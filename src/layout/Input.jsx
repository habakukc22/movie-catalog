import { BsSearch } from "react-icons/bs";
import classes from "./Input.module.css";

function Input() {
  return (
    <div className={classes.input}>
      <form>
        <input type="text" placeholder="Search" />
        <BsSearch className={classes.searchicon} />
      </form>
    </div>
  );
}

export default Input;
