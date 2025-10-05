import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Leftdrop from './Leftdrop';
import Products from './Products';
import Addtocart from './Addtocart';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const filterbooks = (books, query) => {
    if (!query) {
      return books;
    } else {
      return books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()));
    } 
  };

  const filteredbooks = filterbooks(books, search);

  return (
    <>
    {loading ? (
    <div className='bg-[url(https://cdn.pixabay.com/photo/2023/05/07/18/00/library-7976837_960_720.jpg)] pt-85 pl-185 bg-center bg-cover h-screen bg-black/60 bg-blend-multiply'>
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)]"></div>
      </div>
    ) : (
    <div className='bg-[url(https://cdn.pixabay.com/photo/2023/05/07/18/00/library-7976837_960_720.jpg)] bg-center bg-cover h-screen bg-black/40 bg-blend-multiply'>
      <Navbar search={search} setSearch={setSearch} />
      <div className='flex justify-between gap-2'>
        <Leftdrop />
        <Products books={books} filteredbooks={filteredbooks} />
        <Addtocart />
      </div>
    </div>
)}
    </>
  );
}

export default Home;
