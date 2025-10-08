import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center bg-black/60 backdrop-blur-md shadow-lg px-8 py-4 border-b border-white/10">
        
        {/* Left: Logo */}
        <div className="text-4xl font-bold text-white tracking-wide text-shadow-[0_0_25px_rgba(255,255,255,0.6)] drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 transition-transform duration-300 cursor-pointer">
          Library<span className="text-blue-400 text-shadow-[0_0_25px_rgba(135,206,235,0.6)]
 drop-shadow-[0_0_25px_rgba(135,206,235,0.6)]
">Books</span>
        </div>

        {/* Center: Search Bar */}
        <div className="relative w-[40%]">
          <input
            type="text"
            className="w-full px-5 py-2 bg-white/10 border border-white/30 rounded-full text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-[inset_0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
            placeholder="Search for books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fa-solid fa-magnifying-glass absolute right-4 top-3 text-white/70"></i>
        </div>

        {/* Right: Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/Login')}
            className="flex cursor-pointer items-center gap-2 cu px-5 py-2 border border-white/40 rounded-full text-white bg-white/10 hover:bg-white hover:text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 backdrop-blur-md"
          >
            <i className="fa-solid fa-right-from-bracket"></i> Signout
          </button>

          
        </div>
      </div>
    </>
  );
};

export default Navbar;
