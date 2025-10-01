// EditForm.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

const EditForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  // Fetch blog by ID to prefill
  useEffect(() => {
    axios.get(`http://localhost:3000/blog`)
      .then((res) => {
        const blog = res.data.find((b) => b.id === parseInt(id));
        if (blog) {
          setTitle(blog.title);
          setBody(blog.body);
          setImage(blog.image);
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const updateBlog = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/blog/${id}`, { title, body, image });
      navigate("/"); // back to blog list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-120 px-5 absolute top-30 left-140">
      <form
        onSubmit={updateBlog}
        className="relative bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        {/* X Close Button */}
        <button
          type="button"
          onClick={() => navigate("/blog")}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ✏️ Edit Blog
        </h2>

        {/* Title */}
        <label className="block text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        {/* Body */}
        <label className="block text-gray-700 mb-2">Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="4"
        ></textarea>

        {/* Image */}
        <label className="block text-gray-700 mb-2">Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditForm;
