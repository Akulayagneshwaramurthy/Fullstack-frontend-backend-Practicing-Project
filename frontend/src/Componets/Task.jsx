import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Task = () => {
    const [tasks,setTasks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        axios.get("http://localhost:5000/tasks")
        .then(res => setTasks(res.data))
        .catch(error => console.error('Error fetching products:', error));
    },[])

    const addhandle = (e) => {
        e.preventDefault();
        if(!input){
          alert("Enter Your Task")
          return; 
        }
        axios.post("http://localhost:5000/tasks", {text: input})
        .then(res => {
            setTasks(res.data);
            setInput("");
        })
        .catch(error => console.error('Error fetching products:', error));
    }

    const done = (id, currentDone) => {
      axios.put(`http://localhost:5000/tasks/${id}` ,{done: !currentDone})
      .then(res => setTasks(res.data))
      .catch(error => console.error('Error deleting task:', error));
    }

    const del = (id) => {
    axios.delete(`http://localhost:5000/tasks/${id}`)
      .then(res => {
        setTasks(res.data);
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <>
      <div className='mx-auto my-20 w-200 pb-10 shadow-lg'>
        <div className='mx-auto my-10 py-10 px-3 w-150 flex justify-center gap-5'>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} className='border-2 border-gray-300 font-bold text-gray-400 px-4 py-2 w-full text-lg focus:outline-none focus:text-gray-800 focus:ring-2 focus:ring-blue-500 rounded-lg' placeholder='Enter New Tasks' />
            <button 
  type="button" 
  onClick={addhandle} 
  className="bg-green-700 px-2 py-2 w-25 hover:bg-green-600 text-white rounded-lg cursor-pointer">
  <i className="fa-solid fa-plus mr-2"></i> Add
</button>


        </div>
        <div className='mt-5 mx-auto w-150'>
            {tasks.map((task) => (
                <div key={task.id} className='mb-5 rounded-lg w-full px-4 py-2 flex justify-between bg-gray-100 hover:bg-gray-200 cursor-pointer text-black'>
                    <p>{task.text}</p>
                    <div className='flex justify-between gap-5'>
                      {task.done ? <div className='flex justify-between gap-1 text-green-400' ><i className="fa-regular fa-circle-check mt-1"></i>Done</div> : <input type='checkbox' className='p-3 cursor-pointer' checked={task.done} onClick={() => done(task.id,task.done)} />}
                    <i className="fa-solid fa-xmark mt-1 text-red-500 hover:text-red-800" onClick={() => del(task.id)} ></i>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Task
