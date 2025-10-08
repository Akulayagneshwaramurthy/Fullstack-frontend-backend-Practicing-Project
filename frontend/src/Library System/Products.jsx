import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ books, filteredbooks }) => {
  const navigate = useNavigate();
  
  if (!books || books.length === 0) {
    return (
      <div className="flex justify-center items-center w-full min-h-[60vh]">
        <p className="text-white text-4xl font-bold text-center glow-text">
          No books available
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 pt-3 px-5">
      {/* Header */}
      <div className="text-center mb-2">
        <h2 className="text-4xl font-bold text-white mb-3 glow-text">
          Available Books
        </h2>
      </div>

      {/* Books Grid */}
      <div className="h-[77vh] overflow-y-auto scrollbar-hide pr-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
        
        {/* Empty Filter State */}
        {filteredbooks.length === 0 && books.length > 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No books match your search
            </h3>
            <p className="text-purple-200">
              Try adjusting your filters or search terms
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredbooks.map((book) => (
              <div
                key={book.id || book._id}
                className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer shadow-2xl"
                onClick={() => navigate(`/bookdetails/${book.id}`)}
              >
                {/* Book Cover with Image */}
                <div 
                  className="h-60 bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${book.image})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-70" />
                  <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Quick Info Badge */}
                  <div className="absolute top-3 right-3">
                    {book.genres && (
                      <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        {book.genres}
                      </span>
                    )}
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-4 bg-gradient-to-b from-slate-800/90 to-slate-900/90">
                  <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-purple-200 transition-colors min-h-[3.5rem]">
                    {book.title}
                  </h3>
                  
                  {/* Author */}
                  <div className="flex items-center text-sm text-gray-300 mb-3">
                    <i className="fa-solid fa-user-pen text-purple-400 mr-2"></i>
                    <span className="truncate">
                      {book.author || 'Unknown Author'}
                    </span>
                  </div>

                  {/* Additional Info */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <span>{book.rating || '4.5'}</span>
                    </div>
                    {book.pages && (
                      <div className="flex items-center space-x-1">
                        <i className="fa-solid fa-book-open text-blue-400"></i>
                        <span>{book.pages} pages</span>
                      </div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <button className="w-full mt-4 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg text-sm font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2">
                    View Details
                    <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;