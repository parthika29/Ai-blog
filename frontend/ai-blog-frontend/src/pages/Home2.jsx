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
const demoBlogs = [
  {
    _id: "1",
    title: "The Rise of Artificial Intelligence",
    content: "<p>AI is transforming industries by automating tasks, improving decision-making, and enabling innovation. From healthcare to finance, businesses are leveraging artificial intelligence to increase efficiency and reduce human error.</p>In healthcare, AI-powered systems assist doctors in diagnosing diseases at an early stage, analyzing medical images, and even predicting patient outcomes. This not only saves time but also improves the accuracy of treatments. Similarly, in the finance sector, AI helps detect fraudulent transactions, manage risks, and provide personalized financial advice to users.Another major impact of AI can be seen in customer service. Chatbots and virtual assistants are now capable of handling user queries 24/7, offering instant responses and enhancing customer experience. Companies are also using AI to analyze customer behavior, allowing them to deliver more targeted products and services.Moreover, AI is driving innovation in areas like self-driving cars, smart homes, and recommendation systems used by platforms such as streaming services and e-commerce websites. These technologies are making everyday life more convenient and personalized.However, with rapid growth, AI also brings challenges such as data privacy concerns, job displacement, and ethical issues. It is important for organizations and governments to ensure responsible use of AI by implementing proper regulations and guidelines.In conclusion, artificial intelligence is not just a technological advancement but a powerful tool that is reshaping the future. As it continues to evolve, its impact will only grow, making it essential for individuals and businesses to adapt and stay ahead in this AI-driven world.</p>",
    category: "AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    author: { email: "ai@future.com" },
    isDemo: true
  },
  {
    _id: "2",
    title: "Mastering React for Modern Web Development",
    content: "<p>React has become one of the most popular libraries for building dynamic user interfaces, especially for single-page applications. Developed and maintained by Meta Platforms, React allows developers to create reusable UI components, making the development process faster and more efficient. One of the key features of React is its component-based architecture. Instead of building entire pages from scratch, developers can break the UI into smaller, manageable components. These components can be reused across different parts of the application, improving code maintainability and scalability.Another powerful feature is the Virtual DOM. React uses this to optimize rendering by updating only the parts of the UI that have changed, rather than reloading the entire page. This results in better performance and a smoother user experience.React also introduces the concept of state and props, which help manage data within components. With hooks like useState and useEffect, developers can handle complex logic in a simpler and more readable way compared to traditional methods.</p>",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: { email: "react@dev.com" },
    isDemo: true
  },
  {
    _id: "3",
    title: "Startup Growth Strategies",
    content: "<p>Scaling a startup requires smart planning, strong marketing, and continuous innovation. In the early stages, founders often focus on building a solid product that solves a real problem. However, as the business grows, the challenge shifts from survival to sustainable expansion. One of the most important aspects of scaling is having a clear growth strategy. Startups must identify their target audience, understand market demand, and position their product effectively. Without a well-defined plan, rapid growth can lead to operational inefficiencies and missed opportunities. Marketing also plays a crucial role in scaling. Digital platforms, social media, and content marketing allow startups to reach a wider audience at a lower cost. Building a strong brand presence helps in gaining customer trust and standing out in a competitive market. Another key factor is building the right team. As the startup grows, hiring skilled and motivated individuals becomes essential. A strong team not only improves productivity but also brings fresh ideas and perspectives that drive innovation.</p>",
    category: "Business",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    author: { email: "startup@founder.com" },
    isDemo: true
  },
  {
    _id: "4",
    title: "Improve Productivity in Daily Life",
    content: "<p>Productivity is not about doing more, but doing things efficiently with focus. In a world full of distractions, the ability to concentrate on what truly matters has become more valuable than ever. One of the key principles of productivity is prioritization. Instead of trying to complete every task, it is important to identify high-impact activities that contribute the most to your goals. Techniques like the “80/20 rule” help in focusing on tasks that deliver maximum results with minimum effort. Another essential factor is time management. Breaking your work into smaller, manageable chunks and setting clear deadlines can significantly improve efficiency. Methods like time-blocking or the Pomodoro technique help maintain focus and prevent burnout. Eliminating distractions is equally important. Constant notifications, social media, and multitasking reduce concentration and slow down progress. Creating a dedicated workspace and setting boundaries can help maintain deep focus. Consistency also plays a major role. Small, regular efforts over time lead to significant results. Building habits such as planning your day, reviewing progress, and staying organized can greatly enhance productivity. Moreover, taking breaks and maintaining a healthy work-life balance is crucial. Rest allows the mind to recharge, leading to better creativity and decision-making.</p>",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    author: { email: "focus@life.com" },
    isDemo: true
  }
];
// Fetch blogs from backend
useEffect(() => {


const fetchBlogs = async () => {
  try {
    const res = await getBlogs();
    setBlogs([...demoBlogs, ...res.data]);
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
  onClick={() => {
  if (blog.isDemo) {
    navigate(`/demo/${blog._id}`, { state: blog });
  } else {
    navigate(`/blog/${blog._id}`);
  }
}}
>

  {blog.image && (
  <img
    src={blog.image}
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
