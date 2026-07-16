import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getMovies,
  addMovie as apiAddMovie,
  updateMovie as apiUpdateMovie,
  deleteMovie as apiDeleteMovie,
} from "./services/movieService";

export default function App() {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    try {
      const data = await getMovies();

      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const addMovie = async (movie) => {
    try {
      await apiAddMovie(movie);

      await loadMovies();
    } catch (error) {
      console.log(error);
    }
  };
  const updateMovie = async (movie) => {
    try {
      await apiUpdateMovie(movie);

      await loadMovies();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await apiDeleteMovie(id);

      await loadMovies();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />

        <Route
          path="/AdminDashboard"
          element={
            <AdminDashboard
              movies={movies}
              addMovie={addMovie}
              updateMovie={updateMovie}
              deleteMovie={deleteMovie}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
