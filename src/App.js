import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Applications from "./pages/Applications";
import User from "./pages/User";
import { useSelector } from "react-redux";
import SearchResults from "./components/SearchResults";

function App() {
  const isSearching = useSelector((state) => state.search.isSearching);
  const searchedMovies = useSelector((state) => state.search.searchedMovies);
  console.log(isSearching, searchedMovies);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={isSearching ? <SearchResults /> : <Home />}
            />
            <Route path="/applications" element={<Applications />} />
            <Route path="/sign-in" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
