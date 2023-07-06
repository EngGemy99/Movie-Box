import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "97cd0ab3fd3e22a15f551b94745e328a",
    language: "en",
  },
});
