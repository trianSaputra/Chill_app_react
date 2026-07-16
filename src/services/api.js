import axios from "axios";

const api = axios.create({
  baseURL: "https://6a531bae78ecba6073e2fae8.mockapi.io/",
});

export default api;
