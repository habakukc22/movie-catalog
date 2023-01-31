import classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={classes.card}
      onClick={props.onClick}
      style={props.style}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
    </div>
  );
}

export default Card;
