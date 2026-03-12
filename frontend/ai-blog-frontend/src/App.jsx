import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Login from "./pages/Login";
import BlogDetail from "./pages/BlogDetail";
import Register from "./pages/Register";
import AuthorDashboard from "./pages/AuthorDashboard";
import CreateBlog from "./pages/CreateBlog";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/author/dashboard" element={
            <ProtectedRoute roles={["author"]}>
              <AuthorDashboard />
            </ProtectedRoute>
          } />
          <Route path="/author/create-blog" element={
            <ProtectedRoute roles={["author"]}>
              <CreateBlog />
            </ProtectedRoute>
          } />
          <Route path='/write' element={<CreateBlog/>}/>
      
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/admin/dashboard" element={
            <ProtectedRoute roles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
