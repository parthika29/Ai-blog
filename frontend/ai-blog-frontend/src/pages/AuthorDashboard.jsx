import { Link } from "react-router-dom";

const AuthorDashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Author Dashboard</h2>
      <Link to="/author/create-blog" className="bg-blue-600 text-white px-4 py-2 rounded">Create Blog</Link>
      {/* Could list author's blogs here */}
    </div>
  );
};

export default AuthorDashboard;
