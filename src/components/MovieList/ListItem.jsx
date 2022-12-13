import Movie from "./Movie"

function ListItem(props) {
  return (
    <>
      <Movie movie={props.movie} index={props.index} />
    </>
  );
}

export default ListItem;
