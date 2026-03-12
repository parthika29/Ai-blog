import axios from "axios";

export const generateBlog = (data) => {
  const token = localStorage.getItem("token"); // or cookies

  return axios.post(
    "http://localhost:5000/api/ai/generate",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
