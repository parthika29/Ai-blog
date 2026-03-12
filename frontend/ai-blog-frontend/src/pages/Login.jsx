// import { useState, useContext } from "react";
// import { login } from "../api/authApi";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const { loginUser } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await login({ email, password });
//     loginUser(res.data.token, res.data.role);

//     if (res.data.role === "author") navigate("/author/dashboard");
//     else if (res.data.role === "admin") navigate("/admin/dashboard");
//     else navigate("/");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 border rounded shadow">
//       <h2 className="text-xl font-bold mb-4">Login</h2>
//       <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full mb-2 p-2 border rounded"/>
//       <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full mb-2 p-2 border rounded"/>
//       <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Login</button>
//     </form>
//   );
// };

// export default Login;
import { useState, useContext } from "react";
import { login } from "../api/authApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/register.css"; // reuse same styling

const Login = () => {

  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // frontend validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    try {

      const res = await login({ email, password });

      loginUser(res.data.token);

      navigate("/home");

    } catch (err) {

      if (err.response) {
        const message = err.response.data?.message;

        if (message === "User not found") {
          setError("User does not exist");
        } 
        else if (message === "Invalid credentials") {
          setError("Incorrect email or password");
        } 
        else {
          setError(message || "Login failed");
        }

      } else {
        setError("Server error. Please try again.");
      }

    }
  };

  return (
    <div className="registerWrapper">

      <div className="registerCard">

        <h1 className="registerTitle">Welcome Back</h1>

        <p className="registerSubtitle">
          Login to continue reading and writing blogs
        </p>

        {error && <p className="errorText">{error}</p>}

        <form onSubmit={handleSubmit} className="registerForm">

          <input
            type="email"
            placeholder="Email"
            className="registerInput"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="registerInput"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button className="registerBtn">
            Login
          </button>

        </form>

        <p className="registerLogin">
          Don't have an account? 
          <span onClick={()=>navigate("/register")}> Register</span>
        </p>

      </div>

    </div>
  );
};

export default Login;