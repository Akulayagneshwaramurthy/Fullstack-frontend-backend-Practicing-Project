import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Crud from './Componets/Crud'
import Task from './Componets/Task'
import Blog from './Blog/Blog'
import Form from './Blog/form'
import Login from './Blog/Login'
import EditForm from './Blog/EditForm';
import Signup from './Blog/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path='/blog' element={<Blog/>} />
      <Route path='/form' element={<Form/>} />
      <Route path="/edit/:id" element={<EditForm />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App
