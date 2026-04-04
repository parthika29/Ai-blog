import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const DemoBlog = () => {
  const location = useLocation();
  const blog = location.state;

  if (!blog) return <p>No blog found</p>;

  return (
    <div style={{ padding: "20px" }}>
   <Link to="/home" className="backBtn">
            ← Back
          </Link>
      <h1>{blog.title}</h1>

      <p>By {blog.author?.email}</p>

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
      )}

      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

    </div>
  );
};

export default DemoBlog;