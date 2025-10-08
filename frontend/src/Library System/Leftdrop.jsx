import React, { useState } from 'react';

const Leftdrop = ({ setGenre, prof, all, adv, his }) => {
  const [side, setSide] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setSide(!side)}
          className="bg-black/70 text-white px-2 py-3 rounded-r-lg shadow-lg hover:bg-black/90 transition-all duration-300 border-l border-y border-white/20"
        >
          {side ? (
            <i className="fa-solid fa-chevron-left cursor-pointer text-lg"></i>
          ) : (
            <i className="fa-solid fa-chevron-right cursor-pointer text-lg"></i>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 border-r border-white/10 ${
          side ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 h-full overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center mb-6">
            <i className="fa-regular fa-circle-user text-6xl text-blue-400 mb-3 drop-shadow-lg"></i>
            <h2 className="text-xl font-bold text-white">Menu</h2>
          </div>

          {/* Navigation Items */}
          <div className="space-y-5">
            <div
              className="w-full py-2 px-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg text-sm font-medium"
              onClick={prof}
            >
              <i className="fa-solid fa-user mr-2 text-xs"></i>
              Your Profile
            </div>

            <div
              className="w-full py-2 px-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg text-sm font-medium"
              onClick={all}
            >
              <i className="fa-solid fa-book mr-2 text-xs"></i>
              All Books
            </div>

            <div
              className="w-full py-2 px-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg text-sm font-medium"
              onClick={his}
            >
              <i className="fa-solid fa-landmark mr-2 text-xs"></i>
              Historical
            </div>

            <div
              className="w-full py-2 px-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg text-sm font-medium"
              onClick={adv}
            >
              <i className="fa-solid fa-mountain mr-2 text-xs"></i>
              Adventure
            </div>

            <div
              className="w-full py-2 px-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg text-sm font-medium"
              onClick={() => setGenre('Business & Finance')}
            >
              <i className="fa-solid fa-chart-line mr-2 text-xs"></i>
              Business & Finance
            </div>

            <div
              className="w-full py-2 px-3 bg-white/5 border border-white/10 rounded-lg cursor-pointer transition duration-300 hover:bg-blue-500 hover:border-blue-400 hover:shadow-lg text-sm font-medium"
              onClick={() => setGenre('Law & Politics')}
            >
              <i className="fa-solid fa-scale-balanced mr-2 text-xs"></i>
              Law & Politics
            </div>
          </div>

          {/* Footer */}
          <div className="absolute bottom-4 left-4 right-4 text-center">
            <p className="text-xs text-gray-400">Library Books v1.0</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leftdrop;