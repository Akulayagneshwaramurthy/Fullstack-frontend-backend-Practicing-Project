import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Leftdrop from './Leftdrop';
import Products from './Products';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='bg-[url(https://cdn.pixabay.com/photo/2023/05/07/18/00/library-7976837_960_720.jpg)] bg-center bg-cover h-screen bg-black/40 bg-blend-multiply'>
      <Navbar />
      <div className='flex justify-between gap-5'>
        <Leftdrop />
        <Products books={books} setBooks={setBooks} />
      </div>
    </div>
  );
}

export default Home;
