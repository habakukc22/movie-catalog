import List from "../components/MovieList/List";
// import classes from "./CategoriesMobile.module.css";


function CategoriesMobile() {
  let discoverMovies = [{ title: "Action", url: "" }];
  
  return (
    <div>
      {discoverMovies.map((category) => (
        <List key={Math.random()} title={category.title} url={category.url} />
      ))}
    </div>
  );
}

export default CategoriesMobile;
