import classes from "./Categories.module.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const apiKey = "0f2b38bc79199925ea745449cbd43368";
let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

function Categories() {
  const [genres, setGenres] = useState([]);
  const isCategoriesShown = useSelector(
    (state) => state.categories.isCategoriesShown
  );

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setGenres(data.genres);
    };

    fetchGenres();
  }, []);

  // console.log(genres);
  let categoryList;
  if (genres.length) {
    categoryList = genres.map((genre) => (
      <div key={genre.id} className={classes.genre}>
        <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
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
