// Blog.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PencilIcon, TrashIcon, UserIcon, ArrowRightOnRectangleIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/blog")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const del = (id) => {
    axios.delete(`http://localhost:3000/blog/${id}`)
  .then((res) => setBlogs(res.data))
  .catch((err) => console.error(err));
  }

  const edit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">🌍 Travel Blog</h1>
        <div className="flex items-center space-x-4">
          {/* Create Button */}
          <Link to="/form">
            <button className="flex items-center gap-2 bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
              <PlusIcon className="h-5 w-5" />
              Create
            </button>
          </Link>

          {/* Login Button */}
          <button onClick={() => navigate('/login')} className="flex items-center gap-2 border border-gray-300 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <ArrowRightOnRectangleIcon className="h-5 w-5 text-gray-600" />
            Login
          </button>

          {/* Signup Button */}
          <button onClick={() => navigate('/signup')} className="flex items-center gap-2 border border-gray-300 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-100 transition">
            <UserIcon className="h-5 w-5 text-gray-600" />
            Signup
          </button>
        </div>
      </nav>

      {/* Blog Section */}
      <div className="py-10 px-5">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          📰 Travel Blogs
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {blog.title}
                  </h3>
                  <div className="flex space-x-2">
                    <button type="button" onClick={() => edit(blog.id)} className="p-1 rounded hover:bg-gray-200 cursor-pointer transition">
                      <PencilIcon className="h-5 w-5 text-blue-600" />
                    </button>
                    <button type="button" onClick={() => del(blog.id)} className="p-1 rounded hover:bg-gray-200 cursor-pointer transition">
                      <TrashIcon className="h-5 w-5 text-red-600" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {blog.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
