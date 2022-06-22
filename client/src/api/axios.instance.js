import axios from "axios";

export const API_INSTANCE = axios.create({
  baseURL: "http://localhost:5000",
});
