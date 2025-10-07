import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({ books,filteredbooks }) => {
  const navigate = useNavigate();
  if (!books || books.length === 0) {
    return (
      <div className="flex justify-center pt-55 items-center w-full h-full">
        <p className="text-white text-6xl text-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] text-center">No books available</p>
      </div>
    );
  }

  return (
    <>
    <div className="h-[80vh] overflow-x-auto p-4">
      <h2 className="text-white text-4xl text-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] text-center mb-6">Available Books</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {filteredbooks.map((book) => (
          <div
            key={book.id || book._id}
            style={{ backgroundImage: `url(${book.image})` }}
            onClick={() => {navigate(`/bookdetails/${book.id}`)}} // use _id if data is from MongoDB
            className="w-44 h-60 pt-35 bg-white/10 bg-cover bg-center cursor-pointer rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-black/50 text-white text-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] text-center py-2 font-semibold">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Products;