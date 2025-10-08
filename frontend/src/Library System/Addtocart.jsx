import React, { useState } from 'react';

const Addtocart = ({ cartItems = [] }) => {
  const [open, setOpen] = useState(false);

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price_in_INR || 0), 0);

  return (
    <>
      {/* Toggle Button with Badge */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-black/70 text-white px-2 py-3 rounded-l-lg shadow-lg hover:bg-black/90 transition-all duration-300 border-r border-y border-white/20 relative"
        >
          {totalItems > 0 && (
            <span className="absolute -top-1 -left-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {totalItems}
            </span>
          )}
          {open ? (
            <i className="fa-solid fa-chevron-right cursor-pointer text-lg"></i>
          ) : (
            <i className="fa-solid fa-chevron-left cursor-pointer text-lg"></i>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-gray-900 to-black backdrop-blur-lg text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-40 border-l border-white/10 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-xl font-bold flex items-center justify-center gap-2">
              <i className="fa-solid fa-cart-shopping text-blue-400"></i>
              Your Cart
              {totalItems > 0 && (
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </h1>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center mt-20">
                <i className="fa-solid fa-cart-arrow-down text-4xl text-gray-500 mb-3"></i>
                <p className="text-gray-400 text-sm">Your cart is empty</p>
                <p className="text-gray-500 text-xs mt-1">Add some books to get started</p>
              </div>
            ) : (
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-blue-400/30 transition duration-200"
                  >
                    <p className="font-medium text-sm mb-1 line-clamp-2">{item.title}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-green-400 font-bold">₹{item.price_in_INR}</span>
                      <button className="text-red-400 hover:text-red-300 transition">
                        <i className="fa-solid fa-trash text-xs"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Total and Checkout */}
          {cartItems.length > 0 && (
            <div className="border-t border-white/10 pt-4 mt-4">
              <div className="flex justify-between items-center mb-3 text-sm">
                <span className="text-gray-300">Total:</span>
                <span className="text-green-400 font-bold text-lg">₹{totalPrice}</span>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-300 text-sm">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Addtocart;