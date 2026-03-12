// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/home2.css";
// import Navbar2 from "../components/Navbar2";

// const Home2 = () => {

//   const navigate = useNavigate();

//   const [blogs, setBlogs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [interest, setInterest] = useState("all");

//   const interests = ["All","AI","Programming","Technology","Startups","Python","story","life","psychology","sports","Biography"];

//   useEffect(() => {
//     const demoBlogs = [
//       { id:1, title:"Introduction to AI", author:"John", category:"AI", description:"Basics of Artificial Intelligence..." },
//       { id:2, title:"React Performance Tips", author:"Sarah", category:"Programming", description:"Improve React performance..." },
//       { id:3, title:"Future of Machine Learning", author:"David", category:"AI", description:"ML trends for next decade..." },
//       { id:4, title:"Startup Growth Hacks", author:"Alex", category:"Startups", description:"How startups scale fast..." }
//     ];

//     setBlogs(demoBlogs);
//   }, []);

//   const filteredBlogs = blogs.filter((blog)=>{
//     const matchSearch =
//       blog.title.toLowerCase().includes(search.toLowerCase()) ||
//       blog.description.toLowerCase().includes(search.toLowerCase());

//     const matchInterest =
//       interest === "All" || blog.category === interest;

//     return matchSearch && matchInterest;
//   });

//   return (
//     <div className="home2Container">
//      <Navbar2 search={search} setSearch={setSearch} />
//       <h1 className="homeTitle">Explore Blogs</h1>

//       {/* Interests */}

//       <div className="interestBar">

//         {interests.map((item)=>(
//           <button
//             key={item}
//             className={`interestBtn ${interest === item ? "activeInterest":""}`}
//             onClick={()=>setInterest(item)}
//           >
//             {item}
//           </button>
//         ))}

//       </div>

//       {/* Blog Grid */}

//       <div className="blogsGrid">

//         {filteredBlogs.map((blog)=>(
//           <div
//             key={blog.id}
//             className="blogCard"
//             onClick={()=>navigate(`/blog/${blog.id}`)}
//           >

//             <h2>{blog.title}</h2>

//             <p className="blogAuthor">
//               By {blog.author}
//             </p>

//             <p className="blogDesc">
//               {blog.description}
//             </p>

//             <span className="blogCategory">
//               {blog.category}
//             </span>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default Home2;
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getBlogs } from "../api/blogApi";
// import "../styles/home2.css";
// import Navbar2 from "../components/Navbar2";

// const Home2 = () => {

//   const navigate = useNavigate();

//   const [blogs, setBlogs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [interest, setInterest] = useState("All");

//   const interests = [
//     "All",
//     "AI",
//     "Programming",
//     "Technology",
//     "Startups",
//     "Python",
//     "story",
//     "life",
//     "psychology",
//     "sports",
//     "Biography"
//   ];

//   // Fetch blogs from backend
//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const res = await getBlogs();
//         setBlogs(res.data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

  
// fetchBlogs();


//   }, []);

//   // Filter blogs
//   const filteredBlogs = blogs.filter((blog) => {


// const title = blog.title || "";
// const content = blog.content || "";

// const matchSearch =
//   title.toLowerCase().includes(search.toLowerCase()) ||
//   content.toLowerCase().includes(search.toLowerCase());

// const matchInterest =
//   interest === "All" || blog.category === interest;

// return matchSearch && matchInterest;




//   });

//   return (<div className="home2Container">

//     ```
//     <Navbar2 search={search} setSearch={setSearch} />

//     <h1 className="homeTitle">Explore Blogs</h1>

//     {/* Interest Categories */}
//     <div className="interestBar">

//       {interests.map((item) => (
//         <button
//           key={item}
//           className={`interestBtn ${interest === item ? "activeInterest" : ""}`}
//           onClick={() => setInterest(item)}
//         >
//           {item}
//         </button>
//       ))}

//     </div>

//     {/* Blogs Grid */}
//     <div className="blogsGrid">

//       {filteredBlogs.length === 0 ? (
//         <p className="noBlogs">No blogs available</p>
//       ) : (

//         filteredBlogs.map((blog) => (

//           <div
//             key={blog._id}
//             className="blogCard"
//             onClick={() => navigate(`/blog/${blog._id}`)}
//           >

//             <h2>{blog.title}</h2>

//             <p className="blogAuthor">
//               By {blog.author?.email || "Unknown Author"}
//             </p>

//             <p className="blogDesc">
//               {blog.content
//                 ? blog.content.replace(/<[^>]+>/g, "").substring(0, 120) + "..."
//                 : "No content available"}
//             </p>

//             {blog.category && (
//               <span className="blogCategory">
//                 {blog.category}
//               </span>
//             )}

//           </div>

//         ))

//       )}

//     </div>

//   </div>


// );
// };

// export default Home2;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../api/blogApi";
import "../styles/home2.css";
import Navbar2 from "../components/Navbar2";

const Home2 = () => {

const navigate = useNavigate();

const [blogs, setBlogs] = useState([]);
const [search, setSearch] = useState("");
const [interest, setInterest] = useState("All");

const interests = [
"All",
"AI",
"Programming",
"Technology",
"Web Development",
"Python",
"Business",
"Productivity",
"Writing",
"Story",
"Life",
"Self Improvement",
"Psychology",
"Health",
"Education",
"Finance",
"Travel",
"Design",
"Biography",
"History",
"Philosophy",
"Sports"
];
// Fetch blogs from backend
useEffect(() => {


const fetchBlogs = async () => {
  try {
    const res = await getBlogs();
    setBlogs(res.data);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

fetchBlogs();


}, []);

// Filter blogs
const filteredBlogs = blogs.filter((blog) => {

const title = blog.title || "";
const content = blog.content || "";

const matchSearch =
  title.toLowerCase().includes(search.toLowerCase()) ||
  content.toLowerCase().includes(search.toLowerCase());

const matchInterest =
  interest === "All" ||
  blog.category?.toLowerCase() === interest.toLowerCase();

return matchSearch && matchInterest;

});

return ( <div className="home2Container">


  <Navbar2 search={search} setSearch={setSearch} />

  <h1 className="homeTitle">Explore Blogs</h1>

  {/* Category Buttons */}
  <div className="interestBar">

    {interests.map((item) => (
      <button
        key={item}
        className={`interestBtn ${interest === item ? "activeInterest" : ""}`}
        onClick={() => setInterest(item)}
      >
        {item}
      </button>
    ))}

  </div>

  {/* Blog Cards */}
  <div className="blogsGrid">

    {filteredBlogs.length === 0 ? (
      <p className="noBlogs">No blogs available</p>
    ) : (

      filteredBlogs.map((blog) => (

        <div
  key={blog._id}
  className="blogCard"
  onClick={() => navigate(`/blog/${blog._id}`)}
>

  {blog.image && (
    <img
      src={`https://ai-blog-1-rsz9.onrender.com/${blog.image}`}
      alt={blog.title}
      className="blogThumbnail"
    />
  )}

  <div className="blogContent">

    <h2>{blog.title}</h2>

    <p className="blogAuthor">
      By {blog.author?.email || "Unknown"}
    </p>

    <p className="blogDesc">
      {blog.content.replace(/<[^>]+>/g, "").substring(0, 120)}...
    </p>

    <span className="blogCategory">
      {blog.category}
    </span>

  </div>

</div>
      ))

    )}

  </div>

</div>


);
};

export default Home2;
