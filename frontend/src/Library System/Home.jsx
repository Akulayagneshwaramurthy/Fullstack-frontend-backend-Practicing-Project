import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Leftdrop from './Leftdrop';
import Products from './Products';
import Addtocart from './Addtocart';
import Profile from './Profile';

const Home = ({ cartItems, addtocart }) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [genre, setGenre] = useState('');
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  const prof = () => setProfile(true);
  const all = () => { setGenre('All'); setProfile(false); };
  const his = () => { setGenre('Historical'); setProfile(false); };
  const adv = () => { setGenre('Adventure'); setProfile(false); };

  const filterbooks = (books, query, genre) => {
    let filtered = books;
    if (genre && genre !== 'All') {
      filtered = filtered.filter(book => book.genres.toLowerCase() === genre.toLowerCase());
    }
    if (query) {
      filtered = filtered.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    }
    return filtered;
  };

  const filteredbooks = filterbooks(books, search, genre);

  return (
    <>
      {loading ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Loading Library...</p>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <Navbar search={search} setSearch={setSearch} />
          
          <div className="flex gap-4 p-2 mx-0">
            {/* Sidebar */}
            <div className="w-5 flex-shrink-0">
              <Leftdrop setGenre={setGenre} prof={prof} adv={adv} his={his} all={all} />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 min-h-[80vh]">
              {profile ? (
                <Profile />
              ) : (
                <Products books={books} filteredbooks={filteredbooks} addtocart={addtocart} />
              )}
            </div>
            
            {/* Cart */}
            <div className="w-5 flex-shrink-0">
              <Addtocart cartItems={cartItems} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;