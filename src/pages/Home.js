import classes from "./Home.module.css";
import List from "../components/MovieList/List";

const discoverMovies = [
  {
    title: "What movies are in theatres?",
    url: "/discover/movie?primary_release_date.gte=2022-10-01&primary_release_date.lte=2022-11-29",
  },
  {
    title: "What are the most popular movies?",
    url: "/discover/movie?sort_by=popularity.desc",
  },
  {
    title: "What are the most popular kids movies?",
    url: "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc",
  },
  {
    title: "What are the best dramas that were released this year?",
    url: "/discover/movie?with_genres=18&primary_release_year=2022",
  },
  {
    title: "What are the best drama's?",
    url: "/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10",
  },
];

function Home() {
  return (
    <div className={classes.main}>

      {discoverMovies.map((category) => (
        <List key={Math.random()} title={category.title} url={category.url} />
      ))}

    </div>
  );
}

export default Home;
