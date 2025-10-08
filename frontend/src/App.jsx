import { Routes, Route } from 'react-router-dom';
import Crud from './Componets/Crud';
import Task from './Componets/Task';
import Blog from './Blog/Blog';
import Form from './Blog/form';
import Login from './Blog/Login';
import EditForm from './Blog/EditForm';
import Signup from './Blog/Signup';
import LoginSignup from './Library System/LoginSignup';
import Home from './Library System/Home';
import Profile from './Library System/Profile';
import './App.css';
import BookDetails from './Library System/BookDetails';
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Add to cart function (shared across components)
  const addtocart = (book) => {
    setCartItems((prevItems) => {
      const alreadyInCart = prevItems.find((item) => item.id === book.id);
      if (alreadyInCart) {
        alert('Book already in cart!');
        return prevItems;
      }
      return [...prevItems, book];
    });
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/home' element={<Home cartItems={cartItems} addtocart={addtocart} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookdetails/:id' element={<BookDetails addtocart={addtocart} />} />
      </Routes>
    </>
  );
}

export default App;
