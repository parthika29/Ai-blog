

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBlogById } from "../api/blogApi";
import { Link } from "react-router-dom";
import "../styles/blogDetail.css";

const BlogDetail = () => {

  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {

    const fetchBlog = async () => {

      try {

        const res = await getBlogById(id);
        setBlog(res.data);

      } catch (err) {

        console.error("Failed to load blog", err);

      }

    };

    fetchBlog();

  }, [id]);

  if (!blog) return <p className="loading">Loading...</p>;

  return (

    <div className="blogPage">

      {/* BACK BUTTON */}
      <div className="blogNav">

        <Link to="/home" className="backBtn">
          ← Back
        </Link>

      </div>

      {/* BLOG CONTAINER */}
      <div className="blogContainer">

        <h1 className="blogTitle">{blog.title}</h1>

        <div className="blogMeta">

          <span className="blogAuthor">
            By {blog.author?.email}
          </span>

        

        </div>

        {/* COVER IMAGE */}
        {blog.image && (

          <img
            // src={`http://localhost:5000/uploads/${blog.image}`}
            // alt="blog"
            src={`http://localhost:5000/${blog.image}`}
            alt={blog.title}
            className="blogCover"
          />

        )}

        {/* BLOG CONTENT */}
        <div
          className="blogContent"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>

    </div>

  );

};

export default BlogDetail;