import axios from "axios";

const API = axios.create({ baseURL: "https://ai-blog-1-rsz9.onrender.com/api/auth" });

export const register = (data) => API.post("/register", data);
export const login = (data) => API.post("/login", data);
