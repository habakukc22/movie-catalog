import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import User from "./pages/User";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "./store/categories-slice";
// import { burguerActions } from "./store/burguer-slice";
import SearchResults from "./components/Navbar/SearchResults";
import SingleMovie from "./pages/SingleMovie";
import "./App.css";
import SingleGenre from "./pages/SingleGenre";

// const myKey = "0f2b38bc79199925ea745449cbd43368";

function App() {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.search.isSearching);

  const closeOtherThingsHandler = (e) => {
    console.log(e.target);
    if (
      e.target.id === "categories" ||
      e.target.id === "categoriesButton" 
      // ||
      // e.target.id === "burguerMenuOptions" ||
      // e.target.id === "burguerMenuButton"
    ) {
      return;
    } else {
      dispatch(categoriesActions.closeCategoriesList());
      // dispatch(burguerActions.closeBurguerMenu());
    }
  };

  return (
    <Router>
      <div className="App" onClick={closeOtherThingsHandler}>
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={isSearching ? <SearchResults /> : <Home />}
            />
            <Route path="/:movieId" element={<SingleMovie />} />
            <Route path="/genre/:genreId" element={<SingleGenre />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/sign-in" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
