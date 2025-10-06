import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [user,setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/users')
        .then(res => setUser(res.data));
    },[])
  return (
    <>
       <div className='text-center text-7xl text-white'>no user</div>
    </>
  )
}

export default Profile
