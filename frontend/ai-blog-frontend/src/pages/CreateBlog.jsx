

// import { useState } from "react";
// import { createBlog } from "../api/blogApi";
// import { generateBlog } from "../api/aiApi";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { Link } from "react-router-dom";
// import "../styles/createBlog.css";

// const CreateBlog = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [topic, setTopic] = useState("");
//   const [tone, setTone] = useState("formal");
//   const [words, setWords] = useState(200);
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState(null);

//   const handleAIGenerate = async () => {
//     const res = await generateBlog({ topic, tone, words });
//     setTitle(topic);
//     setContent(res.data.content);
//   };

//   const handleSave = async () => {
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     formData.append("category", category);
//     formData.append("isAIGenerated", !!topic);

//     if (image) formData.append("image", image);

//     await createBlog(formData);

//     alert("Blog saved!");

//     setTitle("");
//     setContent("");
//     setTopic("");
//     setImage(null);
//     setCategory("");
//   };

//   return (
//     <div className="editorPage">

//       {/* HEADER */}
//       <div className="editorHeader">
//         <h1>Create Blog</h1>

//         <Link to="/home" className="backBtn">
//           Back
//         </Link>
//       </div>

//       {/* MAIN CONTAINER */}
//       <div className="editorContainer">

//         {/* AI GENERATOR */}
//         <div className="aiBox">

//           <h3>AI Blog Generator</h3>
//           <p className="aiHint">Generate with AI or write your own</p>

//           <input
//             placeholder="Topic"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />

//           <select
//             value={tone}
//             onChange={(e) => setTone(e.target.value)}
//           >
//             <option value="formal">Formal</option>
//             <option value="casual">Casual</option>
//           </select>

//           <input
//             type="number"
//             value={words}
//             onChange={(e) => setWords(e.target.value)}
//           />

//           <button onClick={handleAIGenerate}>
//             Generate with AI
//           </button>

//         </div>

//         {/* BLOG EDITOR */}
//         <div className="blogEditor">

//           <input
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="titleInput"
//           />

//           <input
//             placeholder="Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="categoryInput"
//           />

//           <ReactQuill
//             value={content}
//             onChange={setContent}
//             theme="snow"
//             className="blogQuill"
//             modules={{
//               toolbar: [
//                 [{ header: [1, 2, 3, false] }],
//                 ["bold", "italic", "underline", "strike"],
//                 [{ list: "ordered" }, { list: "bullet" }],
//                 ["link", "image"],
//                 ["clean"],
//               ],
//             }}
//           />

//           {/* IMAGE UPLOAD */}
//           <div className="imageUpload">

//             <label>Upload Cover Image</label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setImage(e.target.files[0])}
//             />

//             {image && (
//               <img
//                 src={URL.createObjectURL(image)}
//                 alt="Preview"
//                 className="imagePreview"
//               />
//             )}

//           </div>

//           <button
//             onClick={handleSave}
//             className="publishBtn"
//           >
//             Publish Blog
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default CreateBlog;

import { useState } from "react";
import { createBlog } from "../api/blogApi";
import { generateBlog } from "../api/aiApi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link } from "react-router-dom";
import "../styles/createBlog.css";

const CreateBlog = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("formal");
  const [words, setWords] = useState(200);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const [errors, setErrors] = useState({});

  // AI Generate
  const handleAIGenerate = async () => {

    if (!topic.trim()) {
      setErrors({ topic: "Please enter topic to generate blog" });
      return;
    }

    setErrors({});

    try {

      const res = await generateBlog({ topic, tone, words });

      setTitle(topic);
      setContent(res.data.content);

    } catch (error) {
      console.error(error);
    }
  };

  // Save Blog
  const handleSave = async () => {

    let newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Please enter blog title";
    }

    if (!category.trim()) {
      newErrors.category = "Please enter category";
    }

    if (!content || content === "<p><br></p>") {
      newErrors.content = "Please write blog content";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {

      const formData = new FormData();

      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("isAIGenerated", !!topic);

      if (image) {
        formData.append("image", image);
      }

      await createBlog(formData);

      alert("Blog saved successfully!");

      setTitle("");
      setContent("");
      setTopic("");
      setImage(null);
      setCategory("");

    } catch (error) {

      console.error(error);

    }
  };

  return (
    <div className="editorPage">

      {/* HEADER */}
      <div className="editorHeader">

        <h1>Create Blog</h1>

        <Link to="/home" className="backBtn">
          Back
        </Link>

      </div>

      {/* MAIN CONTAINER */}
      <div className="editorContainer">

        {/* AI GENERATOR */}
        <div className="aiBox">

          <h3>AI Blog Generator</h3>
          <p className="aiHint">Generate with AI or write your own</p>

          <input
            placeholder="Topic"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              setErrors({ ...errors, topic: "" });
            }}
          />

          {errors.topic && (
            <p className="errorMsg">{errors.topic}</p>
          )}

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
          </select>

          <input
            type="number"
            value={words}
            onChange={(e) => setWords(e.target.value)}
          />

          <button onClick={handleAIGenerate}>
            Generate with AI
          </button>

        </div>

        {/* BLOG EDITOR */}
        <div className="blogEditor">

          <input
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setErrors({ ...errors, title: "" });
            }}
            className="titleInput"
          />

          {errors.title && (
            <p className="errorMsg">{errors.title}</p>
          )}

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setErrors({ ...errors, category: "" });
            }}
            className="categoryInput"
          />

          {errors.category && (
            <p className="errorMsg">{errors.category}</p>
          )}

          <ReactQuill
            value={content}
            onChange={(value) => {
              setContent(value);
              setErrors({ ...errors, content: "" });
            }}
            theme="snow"
            className="blogQuill"
            modules={{
              toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                ["clean"],
              ],
            }}
          />

          {errors.content && (
            <p className="errorMsg">{errors.content}</p>
          )}

          {/* IMAGE UPLOAD */}
          <div className="imageUpload">

            <label>Upload Cover Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />

            {image && (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="imagePreview"
              />
            )}

          </div>

          <button
            onClick={handleSave}
            className="publishBtn"
          >
            Publish Blog
          </button>

        </div>

      </div>
    </div>
  );
};

export default CreateBlog;