import axios from "axios";

// Base url : https://api.github.com/users/viniciusoj

const api = axios.create({
  baseURL: "https://api.github.com/users/viniciusoj",
});

export default api;
