import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:5000/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="bg-[url(https://www.busby-lee.com/wp-content/uploads/2017/06/Clerk_austin_county-1.jpg)] bg-center bg-cover h-screen bg-black/70 bg-blend-multiply flex justify-center items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)]"></div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-white text-center text-3xl mt-20">
        Book not found.
      </div>
    );
  }

  return (
    <>
    <div className="bg-[url(https://www.busby-lee.com/wp-content/uploads/2017/06/Clerk_austin_county-1.jpg)] bg-center bg-cover min-h-screen bg-black/60 bg-blend-multiply text-white flex justify-center items-center px-6 py-10">
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col md:flex-row items-center gap-10 border border-white/20">
        
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.title}
          className="w-64 h-80 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.6)] object-cover"
        />

        {/* Book Details */}
        <div className="flex-1 space-y-4">
          <h2 className="text-4xl font-bold drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]">{book.title}</h2>
          <p className="text-lg opacity-90">Author: <span className="font-semibold">{book.author}</span></p>
          <p className="text-md opacity-90">Genre: <span className="font-semibold">{book.genres}</span></p>
          <p className="text-md opacity-90">Language: <span className="font-semibold">{book.language}</span></p>
          <p className="text-md mt-3 leading-relaxed">{book.description}</p>
          <p className="text-2xl font-semibold mt-4">Price: ₹{book.price_in_INR}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-lg cursor-pointer font-semibold shadow-[0_0_10px_rgba(34,197,94,0.8)] transition"
            >
              Add to Cart
            </button>
            <button
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg cursor-pointer font-semibold shadow-[0_0_10px_rgba(59,130,246,0.8)] transition"
            >
              Order Now
            </button>
            <button
              onClick={() => navigate('/home')}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg cursor-pointer font-semibold shadow-[0_0_10px_rgba(255,255,255,0.7)] transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BookDetails;
