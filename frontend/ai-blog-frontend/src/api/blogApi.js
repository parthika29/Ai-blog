import axios from "axios";

const API = axios.create({ baseURL: "https://ai-blog-1-rsz9.onrender.com/api/blogs" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const getBlogs = () => API.get("/");
export const getBlogById = (id) => API.get(`/${id}`);
//export const createBlog = (data) => API.post("/", data);
export const createBlog = (data) =>
  API.post("/", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const updateBlog = (id, data) => API.put(`/${id}`, data);
export const deleteBlog = (id) => API.delete(`/${id}`);
