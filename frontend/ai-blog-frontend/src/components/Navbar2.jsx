import { useNavigate } from "react-router-dom";
import "../styles/navbar2.css";
import { FiSearch } from "react-icons/fi";


const Navbar2 = ({ search, setSearch }) => {

  const navigate = useNavigate();

  const handleSignout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar2">

      {/* Logo */}
      <div className="logo" onClick={() => navigate("/home")}>
        NexInk
      </div>

      {/* Search */}

      <div className="searchBox">

       <FiSearch className="searchIcon" />

        <input
          type="text"
          placeholder="Search blogs..."
          className="searchInput"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

      </div>

      {/* Right Side */}

      <div className="navRight">

        <button
          className="writeBtn"
          onClick={() => navigate("/write")}
        >
          ✍ Write
        </button>

        <button
          className="signoutBtn"
          onClick={handleSignout}
        >
          Sign Out
        </button>

      </div>

    </nav>
  );
};

export default Navbar2;