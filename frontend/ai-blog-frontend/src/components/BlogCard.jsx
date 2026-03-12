import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold text-indigo-700 mb-2">{blog.title}</h2>
        <p className="text-sm text-gray-500 mb-2">By {blog.author.email}</p>
        {blog.isAIGenerated && (
          <span className="inline-block bg-yellow-400 text-indigo-900 text-xs font-semibold px-2 py-1 rounded-full mb-2">
            AI Generated
          </span>
        )}
        <p className="text-gray-700 mb-4 line-clamp-3">{blog.content}</p>
        <Link
          to={`/blog/${blog._id}`}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
