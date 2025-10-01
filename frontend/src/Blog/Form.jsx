// Form.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const addBlog = async (e) => {
    e.preventDefault();
    if (!title || !body || !image) {
      alert("Please fill all fields!");
      return;
    }

    const newBlog = { title, body, image };
    try {
      await axios.post("http://localhost:3000/blog", newBlog);
      navigate("/"); // redirect to Blog page
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center w-120 px-5 absolute top-30 left-140">
      <form
        onSubmit={addBlog}
        className="relative bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        {/* X Close Button */}
        <button
          type="button"
          onClick={() => navigate("/blog")}
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-red-500 transition"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ✍️ Create a New Blog
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

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 cursor-pointer text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default Form;
