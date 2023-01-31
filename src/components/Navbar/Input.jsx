import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Input.module.css";
import { searchMovie } from "../../store/search-actions";
import { searchActions } from "../../store/search-slice";
import useDebounce from "../../hooks/useDebounce";

function Input() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const showSearchBar = useSelector((state) => state.search.showSearchBar);
  const isSearching = useSelector((state) => state.search.isSearching);

  let typedText;
  //debounce
  const doTheSearch = () => {
    if (typedText !== "") {
      dispatch(searchMovie(typedText));
    } else {
      dispatch(searchActions.clearResults());
    }
  };

  const debouncedFunc = useDebounce(doTheSearch, 500);

  const searchClickHandler = () => {
    if (isSearching) {
      dispatch(searchActions.toggleSearchBar());
      dispatch(searchActions.clearResults());
    } else {
      // inputRef.current.autoFocus = true;
      dispatch(searchActions.toggleSearchBar());
    }
  };

  const changeHandler = (event) => {
    typedText = inputRef.current.value.trim();
    debouncedFunc();
  };

  if (!showSearchBar && inputRef.current) {
    inputRef.current.value = "";
  }
  
  return (
    <div
      className={`${classes.searchContainer} ${
        showSearchBar ? classes.expanded : ""
      }`}
    >
      <input
        id="input-search"
        type="text"
        placeholder="Search"
        onChange={changeHandler}
        ref={inputRef}
      />

      <div className={classes.iconsContainer}>
        <AiOutlineClose
          className={classes["close-icon"]}
          onClick={searchClickHandler}
        />
        <label htmlFor="input-search">
          <FaSearch
            className={classes["search-icon"]}
            onClick={searchClickHandler}
          />
        </label>
      </div>
    </div>
  );
}

export default Input;
