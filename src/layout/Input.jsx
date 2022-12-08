import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Input.module.css";
import { searchMovie } from "../store/search-actions";
import { searchActions } from "../store/search-slice";

function Input() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.search.showSearchBar);
  const isSearching = useSelector((state) => state.search.isSearching);

  const searchClickHandler = () => {
    if (isSearching) {
      dispatch(searchActions.toggleSearchBar());
      dispatch(searchActions.clearResults());
    } else {
      dispatch(searchActions.toggleSearchBar());
    }
  };

  const changeHandler = (event) => {
    let typedText = inputRef.current.value.trim();

    if (typedText !== "") {
      dispatch(searchMovie(typedText));
    } else {
      dispatch(searchActions.clearResults());
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.input}>
      <form onSubmit={submitHandler}>
        {showSearchBar && (
          <input
            type="text"
            placeholder="Search"
            onChange={changeHandler}
            ref={inputRef}
            autoFocus={true}
          />
        )}
        {!showSearchBar ? (
          <FaSearch
            className={classes["search-icon"]}
            onClick={searchClickHandler}
          />
        ) : (
          <AiOutlineClose
            className={classes["close-icon"]}
            onClick={searchClickHandler}
          />
        )}
      </form>
    </div>
  );
}

export default Input;
