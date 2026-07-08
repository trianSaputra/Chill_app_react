import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { movies as moviesList } from "./data/movie";

export default function App() {
  const [movies, setMovies] = useState(moviesList);
  const addMovie = (movie) => {
    setMovies((prev) => [
      {
        ...movie,
        id: Date.now(),
      },
      ...prev,
    ]);
  };
  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie,
      ),
    );
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie.id !== id));
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
