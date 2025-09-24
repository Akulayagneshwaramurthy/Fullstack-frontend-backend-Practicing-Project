import { useState, useEffect } from 'react'
import axios from 'axios'

function Crud() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
     axios.get('http://localhost:5000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  const SubmitEvent = (e) => {
    e.preventDefault();
    const newUser = { name, email };
    if (!name || !email) {
      alert("Please fill in both fields.");
      return;
    }else if(edit){
      axios.put(`http://localhost:5000/users/${edit}`, newUser)
      .then(response => {
        setUsers(response.data);
        setEditing(false);
        setEdit(null);
        setName("");
        setEmail("");
      })
      .catch(error => {
        console.error('There was an error updating the user!', error);
      });
    }else{
      axios.post('http://localhost:5000/users', newUser)
      .then(response => {
        setUsers(response.data);
        setName("");
        setEmail("");
      })
      .catch(error => {
        console.error('There was an error adding the user!', error);
      });
      }
  }

  const handledit = (users) => {
     setEditing(true);
     setEdit(users.id);
     setEmail(users.email);
     setName(users.name);
  }

  const del = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('There was an error deleting the user!', error);
    });
  }

  return (
    <>
    <div className='container flex justify-around'>
    <form className='text-center mt-20 p-5 w-80 h-70 ml-20 bg-gray-100 shadow-xl rounded' onSubmit={SubmitEvent}>
      <h2 className='text-2xl font-bold mb-4'>{editing ? "Updating User" : "Add New User"}</h2>
      <br/>
      <input type="text" placeholder='Enter Name' className='border-2 border-black px-4 py-1 mr-4 w-70 rounded-lg' value={name} onChange={(e) => setName(e.target.value)} />
      <br/> <br/>
      <input type="email" placeholder='Enter Email' className='border-2 border-black px-4 py-1 w-70 mr-4 rounded-lg' value={email} onChange={(e) => setEmail(e.target.value)} />
      <br/> <br/>
      <button type='submit' className='bg-blue-500 text-white cursor-pointer px-4 py-2 rounded hover:bg-blue-700'>{editing ? "Update" : "Add user"}</button>
    </form>
    <div className='w-200 ml-50'>
      <h1 className='text-3xl font-bold text-center mt-10'>User List</h1>
      <table className='table-auto border-2 border-black w-200 mt-10'>
        <thead>
          <tr>
            <th className='border-2 border-black px-4 py-2 '>ID</th>
            <th className='border-2 border-black px-4 py-2'>Name</th>
            <th className='border-2 border-black px-4 py-2'>Email</th>
            <th className='border-2 border-black px-4 py-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className='border-2 border-black px-4 py-2'>{user.id}</td>
              <td className='border-2 border-black px-4 py-2'>{user.name}</td>
              <td className='border-2 border-black px-4 py-2'>{user.email}</td>
              <td className='border-2 border-black px-4 py-2'>
                <button type='button' onClick={() => handledit(user)} className='bg-green-500 hover:bg-green-700 text-white cursor-pointer px-4 py-2 rounded mr-2'>Edit</button>
                <button type='button' onClick={() => del(user.id)} className='bg-red-500 hover:bg-red-700 text-white cursor-pointer px-4 py-2 rounded'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  )
}

export default Crud
