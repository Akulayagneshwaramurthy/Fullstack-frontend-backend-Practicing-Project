import { Routes, Route } from 'react-router-dom'
import Crud from './Componets/Crud'
import Task from './Componets/Task'
import Blog from './Blog/Blog'
import Form from './Blog/form'
import Login from './Blog/Login'
import EditForm from './Blog/EditForm'
import Signup from './Blog/Signup'
import LoginSignup from './Library System/LoginSignup'
import Home from './Library System/Home'
import Profile from './Library System/Profile'
import './App.css'
import BookDetails from './Library System/BookDetails'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/home' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookdetails/:id' element={<BookDetails/>} />
        
        {/* If you want to enable blog section later */}
        {/* 
        <Route path='/blog' element={<Blog />} />
        <Route path='/form' element={<Form />} />
        <Route path='/edit/:id' element={<EditForm />} />
        <Route path='/signup' element={<Signup />} />
        */}
      </Routes>
    </>
  )
}

export default App
