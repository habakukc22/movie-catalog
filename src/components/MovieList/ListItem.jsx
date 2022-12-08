import Movie from "./Movie"

function ListItem(props) {
  return (
    <>
      <Movie movie={props.movie} />
    </>
  );
}

export default ListItem;
