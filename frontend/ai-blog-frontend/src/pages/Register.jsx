// import { useState } from "react";
// import { register } from "../api/authApi";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("reader");
//   const [adminSecret, setAdminSecret] = useState(""); // ✅ added
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await register({
//         email,
//         password,
//         role,
//         adminSecret: role === "admin" ? adminSecret : undefined,
//       });

//       alert("Registered successfully");
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md mx-auto mt-8 p-6 border rounded shadow"
//     >
//       <h2 className="text-xl font-bold mb-4">Register</h2>

//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         className="w-full mb-2 p-2 border rounded"
//         required
//       />

//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         className="w-full mb-2 p-2 border rounded"
//         required
//       />

//       <select
//         value={role}
//         onChange={(e) => setRole(e.target.value)}
//         className="w-full mb-2 p-2 border rounded"
//       >
//         <option value="reader">Reader</option>
//         <option value="author">Author</option>
//         <option value="admin">Admin</option>
//       </select>

//       {role === "admin" && (
//         <input
//           type="password"
//           placeholder="Admin Secret Code"
//           value={adminSecret}
//           onChange={(e) => setAdminSecret(e.target.value)}
//           className="w-full mb-2 p-2 border rounded"
//           required
//         />
//       )}

//       <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2 w-full">
//         Register
//       </button>
//     </form>
//   );
// };

// export default Register;
import { useState } from "react";
import { register } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await register({
        email,
        password
      });

      alert("Account created successfully!");
      navigate("/login");

    } catch (err) {

      if (err.response) {

        const message = err.response.data?.message;

        if (message === "User already exists") {
          alert("User already exists. Please login.");
        }
        else if (message === "Invalid email") {
          alert("Please enter a valid email.");
        }
        else {
          alert(message || "Registration failed");
        }

      } else {
        alert("Server error. Please try again later.");
      }

    }
  };

  return (
    <div className="registerWrapper">
      <div className="registerCard">

        <h1 className="registerTitle">Join NexInk</h1>

        <p className="registerSubtitle">
          Create an account to start writing and reading.
        </p>

        <form onSubmit={handleSubmit} className="registerForm">
          <input
            type="email"
            placeholder="Email"
            className="registerInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="registerInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="registerBtn">
            Get Started
          </button>
        </form>

        <p className="registerLogin">
          Already have an account? <span onClick={() => navigate("/login")}>Sign in</span>
        </p>

      </div>
    </div>
  );
};

export default Register;