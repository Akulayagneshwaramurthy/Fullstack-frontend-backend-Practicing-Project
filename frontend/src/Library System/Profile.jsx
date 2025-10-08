import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setUser(res.data[0]) // Set first user
        } else {
          console.error('No users found')
        }
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Profile Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 flex justify-between">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center ml-30 mb-4">
            <i className="fa-solid fa-user text-white text-2xl"></i>
          </div>
          <div className='mr-30 text-right'>
          <h2 className="text-5xl mb-5 font-bold text-white">{user.username || 'No User'}</h2>
          <p className="text-blue-100 mr-10">Library Member</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-6">
          {/* Username */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-user-tag text-blue-400"></i>
            </div>
            <div className="flex-1">
              <label className="block text-gray-400 text-sm font-medium mb-1">Username</label>
              <p className="text-white font-semibold">{user.username || 'Not available'}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-envelope text-purple-400"></i>
            </div>
            <div className="flex-1">
              <label className="block text-gray-400 text-sm font-medium mb-1">Email Address</label>
              <p className="text-white font-semibold">{user.email || 'Not available'}</p>
            </div>
          </div>

          {/* Password - Masked */}
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-lock text-green-400"></i>
            </div>
            <div className="flex-1">
              <label className="block text-gray-400 text-sm font-medium mb-1">Password</label>
              <p className="text-white font-semibold">
                {user.password ? '•'.repeat(8) : 'Not available'}
              </p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
              Change
            </button>
          </div>

          {/* Account Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
              <div className="text-2xl font-bold text-blue-400 mb-1">0</div>
              <div className="text-gray-400 text-sm">Books Read</div>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
              <div className="text-2xl font-bold text-purple-400 mb-1">0</div>
              <div className="text-gray-400 text-sm">In Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile