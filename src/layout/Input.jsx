import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import classes from "./Input.module.css";

function Input() {
  const [search, setSearch] = useState(false);

  const click = () => {
    setSearch((prev) => !prev);
  };

  return (
    <div className={classes.input}>
      <form>
        {search && <input type="text" placeholder="Search" />}
        <FaSearch className={classes['search-icon']} onClick={click} />
      </form>
    </div>
  );
}

export default Input;
