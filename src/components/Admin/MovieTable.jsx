import MovieRow from "./MovieRow";

export default function MovieTable({ movies, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="w-full">
        <thead>
          <tr className="bg-[#2B2D31]">
            <th className="p-4 text-left">Poster</th>

            <th className="p-4 text-left">Judul</th>

            <th className="p-4 text-left">Genre</th>

            <th className="p-4 text-center">Rating</th>

            <th className="p-4 text-center">Category</th>

            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <MovieRow
              key={movie.id}
              movie={movie}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
