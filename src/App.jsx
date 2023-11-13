import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/Home";
import MovieList from "./Components/movieList/MovieList";
import Movie from "./pages/MovieDetail/Movie";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route
              path="movie/:id"
              element={<Movie/>}
            ></Route>
            <Route
              path="movies/:type"
              element={<MovieList/>}
            ></Route>
            <Route path="/*" element={<h1>Error Page</h1>}></Route>
            
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
