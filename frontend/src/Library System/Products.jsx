import React from 'react';

const Products = ({ books, setBooks }) => {
  if (!books || books.length === 0) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-white text-lg">No books available</p>
      </div>
    );
  }

  return (
    <div className="h-[80vh] overflow-y-auto p-4">
      <div className="flex flex-wrap justify-center gap-6">
        {books.map((book) => (
          <div
            key={book.id || book._id}
            style={{ backgroundImage: `url(${book.image})` }} // use _id if data is from MongoDB
            className="w-44 h-60 pt-35 bg-white/10 bg-cover bg-center cursor-pointer rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="bg-black/50 text-white text-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center py-2 font-semibold">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;