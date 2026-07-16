import api from "./api";

export const getMovies = async () => {
  const response = await api.get("/movie");
  return response.data;
};

export const addMovie = async (movie) => {
  const response = await api.post("/movie", movie);
  return response.data;
};

export const updateMovie = async (movie) => {
  const response = await api.put(`/movie/${movie.id}`, movie);
  return response.data;
};

export const deleteMovie = async (id) => {
  await api.delete(`/movie/${id}`);
};
