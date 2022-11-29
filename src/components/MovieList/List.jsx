import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import ListItem from "../MovieList/ListItem.jsx";

import classes from "./List.module.css";

function List() {
  const clickHandler = (direction) => {
    if (direction === "left") {
    }
    if (direction === "right") {
    }
  };

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>Continue to watch...</span>
      <div className={classes.wrapper}>
        <SlArrowLeft
          className={`${classes.sliderArrow} ${classes.left}`}
          onClick={() => clickHandler("left")}
        />
        <div className={classes.movieContainer}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
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
