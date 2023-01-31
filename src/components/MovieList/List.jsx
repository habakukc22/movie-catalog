import { useRef } from "react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import useHttp from "../../hooks/useHttp";
import ListItem from "../MovieList/ListItem";

import classes from "./List.module.css";

function List(props) {
  const { title, url } = props;
  const listRef = useRef();
  const wrapperRef = useRef();
  const screenWidth = document.querySelector("#root").clientWidth;
  const cardWidth = screenWidth > 960 ? 316 : 316 / 2; //movie card width + margin

  let data = useHttp(url);
  
  let movies;
  if (data && data.results.length) {
    movies = data.results;
  } else {
    return;
  }

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
            (listRef.current.clientWidth - wrapperRef.current.clientWidth) /
              cardWidth
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
          {movies.map((movie, index) => (
            <ListItem movie={movie} key={movie.id} index={index} />
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
