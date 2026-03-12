// import { useEffect, useState } from "react";
// import { getBlogs } from "../api/blogApi";
// import BlogCard from "../components/BlogCard";

// const Home = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await getBlogs();
//         setBlogs(res.data);
//       } catch (err) {
//         console.error("Failed to fetch blogs:", err);
//       }
//     };
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-indigo-700 mb-6">Latest Blogs</h1>
//         {blogs.length === 0 ? (
//           <p className="text-gray-500 text-center mt-20">No blogs available.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {blogs.map((b) => <BlogCard key={b._id} blog={b} />)}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="heroText">

          <h1>
            Human stories & knowledge with intelligence
          </h1>

          <p>
            A place to write, share, and explore ideas.
          </p>

          <button className="hero-btn" onClick={() => navigate("/register")}>
            Start reading
          </button>

        </div>

        <div className="heroImage">
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/741/971/original/continuous-one-line-drawing-of-hands-holding-pens-and-pencils-writing-letter-on-paper-taking-notes-in-notebook-filling-diary-and-signing-business-documents-concept-doodle-illustration-vector.jpg"
            alt="illustration"
          />
        </div>

      </section>

    </div>
  );
}

export default Home;