import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {

  const navigate = useNavigate();

  return (
    <nav className="navbar">

      <div className="logo">NexInk</div>

      <div className="navLinks">

        <span onClick={() => navigate("/ourstory")}>Our story</span>

        <span onClick={() => navigate("/register")}>Write</span>

        <span onClick={() => navigate("/register")}>Sign in</span>

        <button
          className="startBtn"
          onClick={() => navigate("/register")}
        >
          Get started
        </button>

      </div>

    </nav>
  );
}

export default Navbar;