import { useState } from "react";
import Navbar from "../components/Navbar";
import MovieTable from "../components/Admin/MovieTable";
import MovieForm from "../components/Admin/MovieForm";

export default function AdminDashboard({
  movies,
  addMovie,
  updateMovie,
  deleteMovie,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const openAddForm = () => {
    setSelectedMovie(null);
    setIsOpen(true);
  };

  const openEditForm = (movie) => {
    setSelectedMovie(movie);
    setIsOpen(true);
  };

  const closeForm = () => {
    setSelectedMovie(null);
    setIsOpen(false);
  };

  const handleSave = (movie) => {
    if (movie.id) {
      updateMovie(movie);
    } else {
      addMovie(movie);
    }

    closeForm();
  };
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#181A1C] px-6 md:px-20 py-10 text-white">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Dashboard Movie</h1>

            <p className="text-gray-400">Kelola daftar movie</p>
          </div>

          <button
            onClick={openAddForm}
            className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg cursor-pointer"
          >
            + Tambah Movie
          </button>
        </div>

        <MovieTable
          movies={movies}
          onEdit={openEditForm}
          onDelete={deleteMovie}
        />

        {isOpen && (
          <MovieForm
            movie={selectedMovie}
            onClose={closeForm}
            onSave={handleSave}
          />
        )}
      </main>
    </>
  );
}
