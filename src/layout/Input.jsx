import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import classes from "./Input.module.css";
import { searchMovie } from "../store/search-actions";

function Input() {
  const [search, setSearch] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const searchClickHandler = () => {
    setSearch((prev) => !prev);
  };

  const changeHandler = (event) => {
    let typedText = inputRef.current.value.trim();
    console.log(typedText);
    dispatch(searchMovie(typedText));
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.input}>
      <form onSubmit={submitHandler}>
        {search && (
          <input
            type="text"
            placeholder="Search"
            onChange={changeHandler}
            ref={inputRef}
          />
        )}
        <FaSearch
          className={classes["search-icon"]}
          onClick={searchClickHandler}
        />
      </form>
    </div>
  );
}

export default Input;
