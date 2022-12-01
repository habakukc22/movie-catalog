import { useRef, useState, useEffect } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import ListItem from "../MovieList/ListItem.jsx";

import classes from "./List.module.css";

const urlDefault = "https://api.themoviedb.org/3";
const myKey = "0f2b38bc79199925ea745449cbd43368";

function List(props) {
  const { title, url } = props;
  const listRef = useRef();
  const wrapperRef = useRef();
  const cardWidth = 316; //movie card width + margin

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchHomeData = async () => {
      const response = await fetch(urlDefault + url + `&api_key=${myKey}`);
      const data = await response.json();
      setMovies(data.results);
    };

    fetchHomeData();
  }, [url]);

  let currentPosition = 0;

  const clickHandler = (direction) => {
    if (direction === "left" && currentPosition !== 0) {
      currentPosition = currentPosition + cardWidth;
      listRef.current.style.transform = `translateX(${currentPosition}px)`;
    }

    if (
      direction === "right" &&
      currentPosition >
        -Math.abs(
          Math.floor(
            (listRef.current.clientWidth - wrapperRef.current.clientWidth) / cardWidth
          ) * cardWidth
        ) -
        cardWidth
    ) {
      currentPosition = currentPosition - cardWidth;
      listRef.current.style.transform = `translateX(${currentPosition}px)`;
    }
  };

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>{title}</span>
      <div className={classes.wrapper} ref={wrapperRef}>
        <SlArrowLeft
          className={`${classes.sliderArrow} ${classes.left}`}
          onClick={() => clickHandler("left")}
        />
        <div className={classes.movieContainer} ref={listRef}>
          {movies.map((movie) => (
            <ListItem movie={movie} key={movie.id} />
          ))}
        </div>
        <SlArrowRight
          className={`${classes.sliderArrow} ${classes.right}`}
          onClick={() => clickHandler("right")}
        />
      </div>
    </div>
  );
}

export default List;
