import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookDetails = ({ addtocart }) => {
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading Book Details...</p>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex justify-center items-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-white text-2xl font-bold mb-2">Book Not Found</h2>
          <p className="text-gray-400 mb-4">The book you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/home')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={() => navigate('/home')}
            className="flex items-center gap-2 cursor-pointer px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition border border-white/10"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Back to Home
          </button>
          <h1 className="text-2xl font-bold text-center">Book Details</h1>
          <div className="w-24"></div> {/* Spacer for balance */}
        </div>

        {/* Book Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Book Image */}
            <div className="lg:w-2/5 p-6 flex justify-center items-center">
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-64 h-95 cursor-pointer rounded-xl shadow-2xl object-cover border-4 border-white/10"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ₹{book.price_in_INR}
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div className="lg:w-3/5 p-6 border-l border-white/10">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white mb-2">{book.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-user text-blue-400 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Author</p>
                      <p className="font-semibold">{book.author}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-tag text-green-400 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Genre</p>
                      <p className="font-semibold">{book.genres}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-language text-purple-400 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Language</p>
                      <p className="font-semibold">{book.language}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-indian-rupee-sign text-yellow-400 text-sm"></i>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Price</p>
                      <p className="font-semibold text-lg text-green-400">₹{book.price_in_INR}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <i className="fa-solid fa-file-lines text-gray-400"></i>
                    Description
                  </h3>
                  <p className="text-gray-300 leading-relaxed bg-white/5 rounded-lg p-4 border border-white/5">
                    {book.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <button 
                    onClick={() => addtocart(book)}
                    className="flex items-center gap-2 cursor-pointer px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <i className="fa-solid fa-cart-plus"></i>
                    Add to Cart
                  </button>
                  <button className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    <i className="fa-solid fa-bolt"></i>
                    Buy Now
                  </button>
                  <button className="flex items-center cursor-pointer gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    <i className="fa-solid fa-heart"></i>
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
            <i className="fa-solid fa-shipping-fast text-2xl text-blue-400 mb-2"></i>
            <h4 className="font-semibold mb-1">Free Delivery</h4>
            <p className="text-gray-400 text-sm">On orders above ₹499</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
            <i className="fa-solid fa-rotate-left text-2xl text-green-400 mb-2"></i>
            <h4 className="font-semibold mb-1">Easy Returns</h4>
            <p className="text-gray-400 text-sm">7-day return policy</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 text-center">
            <i className="fa-solid fa-shield-alt text-2xl text-yellow-400 mb-2"></i>
            <h4 className="font-semibold mb-1">Secure Payment</h4>
            <p className="text-gray-400 text-sm">100% secure transaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;