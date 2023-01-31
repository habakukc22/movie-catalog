import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { categoriesActions } from "./store/categories-slice";
import { burguerActions } from "./store/burguer-slice";
import SearchResults from "./components/Navbar/SearchResults";
import SingleMovie from "./pages/SingleMovie";
import "./App.css";
import SingleGenre from "./pages/SingleGenre";
import CategoriesMobile from "./pages/CategoriesMobile";
import Register from "./pages/Register";
import Login from "./pages/Login";

const ancestorHasId = (e, id) => {
  let currentEl = e.target;

  while (true) {
    if (!!currentEl && currentEl.id !== id) {
      if (currentEl.id === "root") {
        return false;
      }

      currentEl = currentEl.parentNode;
    } else {
      return true;
    }
  }
};

function App() {
  const dispatch = useDispatch();
  const isSearching = useSelector((state) => state.search.isSearching);

  const closeOtherThingsHandler = (e) => {
    if (
      ancestorHasId(e, "categories") ||
      ancestorHasId(e, "categoriesButton") ||
      ancestorHasId(e, "burguerMenuOptions") ||
      ancestorHasId(e, "burguerMenuButton")
    ) {
      return;
    } else {
      dispatch(categoriesActions.closeCategoriesList());
      dispatch(burguerActions.closeBurguerMenu());
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
            <Route
              path="/:movieId"
              element={isSearching ? <SearchResults /> : <SingleMovie />}
            />
            <Route
              path="/genre/:genreId"
              element={isSearching ? <SearchResults /> : <SingleGenre />}
            />
            <Route
              path="/categories"
              element={isSearching ? <SearchResults /> : <CategoriesMobile />}
            />
            {/* <Route
              path="/applications"
              element={isSearching ? <SearchResults /> : <Applications />}
            /> */}
            <Route
              path="/sign-in"
              element={isSearching ? <SearchResults /> : <Login />}
            />
            <Route
              path="/sign-up"
              element={isSearching ? <SearchResults /> : <Register />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
