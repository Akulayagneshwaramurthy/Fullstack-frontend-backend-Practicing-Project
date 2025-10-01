import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const SubmitEvent = async(e) => {
    e.preventDefault();
    if(!email || !password){
      alert('Please fill email and password');
       return;
    }
    try{
      const res = await axios.post("http://localhost:3000/signup",{
        email,
        password
      });
      if(res.status === 200){
        alert("Signup successfully")
        navigate('/blog')
      }
    }
    catch (err) {
      console.error(err);
      alert("Signup failed");
    }
  }

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 absolute top-30 left-140">
      {/* X Close Button */}
      <button
        onClick={() => navigate('/blog')}
        className="absolute top-3 right-3 cursor-pointer text-gray-500 hover:text-red-500 text-xl font-bold"
      >
        ✕
      </button>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Sign Up
      </h2>
      <form onSubmit={SubmitEvent} className="space-y-5">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 cursor-pointer text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="text-sm text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-green-500 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
};

export default Signup;
