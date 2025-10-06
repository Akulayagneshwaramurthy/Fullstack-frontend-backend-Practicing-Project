import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Leftdrop from './Leftdrop';
import Products from './Products';
import Addtocart from './Addtocart';
import Profile from './Profile';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [genre,setGenre] = useState('');
  const [profile,setProfile] = useState(false);

  useEffect(() => {
  setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const prof = () => {
    setProfile(true);
  }

  const all = () => {
    setGenre('All')
    setProfile(false);
  }

  const his = () => {
    setGenre('Historical')
    setProfile(false);
  }

  const adv = () => {
    setGenre('Adventure')
    setProfile(false);
  }

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const filterbooks = (books, query ,genre) => {
    let filtered = books;
    if(genre && genre !== 'All'){
      filtered = filtered.filter(book => book.genres.toLowerCase() === genre.toLowerCase());
    }
    if (query) {
      filtered = filtered.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    }
    return filtered;
  };

  const filteredbooks = filterbooks(books, search ,genre);

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
        <Leftdrop setGenre={setGenre} prof={prof} adv={adv} his={his} all={all} />
        {profile ? <Profile /> : 
        <Products books={books} filteredbooks={filteredbooks} />
        }
        <Addtocart />
      </div>
    </div>
)}
    </>
  );
}

export default Home;
