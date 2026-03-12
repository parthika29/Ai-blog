import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [users, setUsers] = useState([]);

  const token = localStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const fetchData = async () => {
      const blogsRes = await axios.get("https://ai-blog-1-rsz9.onrender.com/api/admin/blogs", config);
      const usersRes = await axios.get("https://ai-blog-1-rsz9.onrender.com/api/admin/users", config);
      setBlogs(blogsRes.data);
      setUsers(usersRes.data);
    };
    fetchData();
  }, []);

  const updateStatus = async (id, status) => {
    await axios.put(`https://ai-blog-1-rsz9.onrender.com/api/admin/blogs/${id}`, { status }, config);
    setBlogs(blogs.map(b => b._id === id ? {...b, status} : b));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <h3 className="font-bold mt-4">Blogs</h3>
      {blogs.map(blog => (
        <div key={blog._id} className="border p-2 my-2 rounded flex justify-between">
          <span>{blog.title} ({blog.status})</span>
          <div>
            <button onClick={()=>updateStatus(blog._id,"published")} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Publish</button>
            <button onClick={()=>updateStatus(blog._id,"draft")} className="bg-red-500 text-white px-2 py-1 rounded">Draft</button>
          </div>
        </div>
      ))}

      <h3 className="font-bold mt-4">Users</h3>
      {users.map(u => (
        <div key={u._id} className="border p-2 my-2 rounded">
          {u.email} ({u.role})
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
