import { Pencil, Trash2 } from "lucide-react";

export default function MovieRow({ movie, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-700 hover:bg-[#22282A] transition">
      <td className="p-4">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-16 h-24 object-cover rounded"
        />
      </td>

      <td className="p-4 font-medium">{movie.title}</td>

      <td className="p-4">{movie.genre}</td>

      <td className="p-4 text-center">⭐ {movie.rating}</td>

      <td className="p-4 text-center">{movie.category}</td>

      <td className="p-4">
        <div className="flex justify-center gap-2">
          <button
            onClick={() => {
              console.log(movie);
              onEdit(movie);
            }}
            className="bg-blue-500 hover:bg-blue-600 p-2 rounded cursor-pointer"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(movie.id)}
            className="bg-red-500 hover:bg-red-600 p-2 rounded cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
