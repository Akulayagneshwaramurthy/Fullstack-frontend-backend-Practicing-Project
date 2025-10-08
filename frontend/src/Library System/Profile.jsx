import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setUser(res.data[0]) // Set first user
        } else {
          console.error('No users found')
        }
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='bg-black/40 h-60 w-150 mt-20 p-5 text-white text-shadow-[0_0_20px_rgba(255,255,255,0.6)] drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] ml-20 rounded-lg'>
      <div className='text-4xl text-center mb-4 text-shadow-[0_0_20px_rgba(255,255,255,0.6)]'>
        User Account
      </div>
      <div className='text-xl mt-3 text-center'>Username: {user.username || 'Loading...'}</div>
      <div className='text-xl mt-3 text-center'>Email: {user.email || 'Loading...'}</div>
      <div className='text-xl mt-3 text-center'>Password: {user.password || 'Loading...'}</div>
    </div>
  )
}

export default Profile