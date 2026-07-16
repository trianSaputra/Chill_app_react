import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { uploadImage } from "../../services/cloudinaryService";

export default function MovieForm({ movie, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    rating: "",
    category: "continue",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (movie) {
      setFormData(movie);
      setPreview(movie.image);
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    setPreview(URL.createObjectURL(file));

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Judul wajib diisi";
    }

    if (!formData.genre.trim()) {
      newErrors.genre = "Genre wajib diisi";
    }

    if (!formData.rating) {
      newErrors.rating = "Rating wajib diisi";
    }

    if (!formData.category) {
      newErrors.category = "Kategori wajib dipilih";
    }

    if (!preview) {
      newErrors.image = "Poster wajib dipilih";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      setUploading(true);

      let imageUrl = formData.image;

      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      await onSave({
        ...formData,
        image: imageUrl,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center p-4">
      <div className="bg-[#22282A] rounded-xl w-full max-w-[600px] max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between mb-6">
          <h2 className="text-2xl font-bold">
            {movie ? "Edit Movie" : "Tambah Movie"}
          </h2>

          <button onClick={onClose} className="cursor-pointer">
            <X />
          </button>
        </div>

        <div className="space-y-5">
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Judul"
            className={`w-full p-3 rounded bg-[#303437] border ${
              errors.title ? "border-red-500" : "border-transparent"
            }`}
          />

          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}

          <input
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
            className={`w-full p-3 rounded bg-[#303437] border ${
              errors.genre ? "border-red-500" : "border-transparent"
            }`}
          />

          {errors.genre && (
            <p className="text-red-500 text-sm">{errors.genre}</p>
          )}

          <input
            type="number"
            step="0.1"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="w-full p-3 rounded bg-[#303437]"
          />

          {errors.rating && (
            <p className="text-red-500 text-sm">{errors.rating}</p>
          )}

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-3 rounded bg-[#303437] cursor-pointer"
          >
            <option value="continue">Continue Watching</option>

            <option value="topRating">Top Rating</option>

            <option value="trending">Trending</option>

            <option value="newRelease">New Release</option>
          </select>

          <label
            className={`inline-block px-5 py-3 rounded-lg ${
              uploading
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
            }`}
          >
            {uploading ? "Mengupload..." : "Pilih Poster"}

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
              disabled={uploading}
            />
          </label>

          {errors.image && (
            <p className="text-red-500 text-sm mt-2">{errors.image}</p>
          )}
          {preview && (
            <img src={preview} alt="Preview" className="w-40 rounded-lg" />
          )}

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="bg-gray-500 px-5 py-2 rounded cursor-pointer"
            >
              Batal
            </button>

            <button
              onClick={handleSubmit}
              disabled={uploading}
              className={`px-5 py-2 rounded text-white ${
                uploading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700 cursor-pointer"
              }`}
            >
              {uploading ? "Mengupload..." : "Simpan"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
