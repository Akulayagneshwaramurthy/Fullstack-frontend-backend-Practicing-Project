import React, { useState } from "react";
import axios from "axios";

const LoginSignup = () => {
  const [loading, setLoading] = useState(false);
  const [startedPage, setStartedPage] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  // Form states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleGetStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStartedPage(true);
    }, 2000);
  };

  const handleSubmit = async () => {
    try {
      const url = isSignup ? "http://localhost:5000/signup" : "http://localhost:5000/login";
      const payload = isSignup ? { username, email, password } : { username, password };

      const res = await axios.post(url, payload);
      setMessage(res.data.message);

      if (res.status === 200 || res.status === 201) {
        alert(res.data.message);
      }
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || "Something went wrong!");
        alert(err.response.data.message || "Something went wrong!");
      }
    }
  };

  return (
    <>
      {/* Loading Spinner */}
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-[url('https://images5.alphacoders.com/808/thumb-1920-808254.jpg')] bg-cover bg-center bg-black/50 bg-blend-multiply">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-white shadow-[inset_0_0_15px_rgba(255,255,255,0.9),0_0_25px_rgba(255,255,255,0.9)]"></div>
        </div>
      ) : !startedPage ? (
        // Initial "Get Start" page
        <div className="bg-[url('https://images5.alphacoders.com/808/thumb-1920-808254.jpg')] text-shadow-[0_0_20px_rgba(255,255,255,0.6)] bg-cover bg-center bg-black/50 bg-blend-multiply h-screen flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-bold text-6xl md:text-7xl mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Library Books
          </h1>
          <p className="text-white text-lg md:text-xl mb-6">
            Library books are a valuable resource that provide knowledge, stories, and research material to readers of all ages.
          </p>
          <button
            onClick={handleGetStart}
            className="bg-white text-black py-3 px-8 cursor-pointer rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_30px_rgba(255,255,255,0.9)] hover:scale-105 transition transform duration-300"
          >
            <i className="fa-solid fa-play mr-3"></i>
            Get Start
          </button>
        </div>
      ) : (
        // Login/Signup form
        <div className="relative bg-[url('https://images5.alphacoders.com/808/thumb-1920-808254.jpg')] bg-cover bg-center bg-black/50 bg-blend-multiply h-screen flex items-center justify-center px-4">
          <div className="bg-white/20 backdrop-blur-md w-full max-w-md p-8 rounded-xl shadow-lg border border-white/30 ring-2 ring-white/20 hover:ring-white/40 transition duration-300">
            <h2 className="text-center text-4xl font-bold text-white mb-6">
              {isSignup ? "Sign Up" : "Login"}
            </h2>

            {/* Username */}
            <label className="block text-white text-lg font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full py-2 px-4 mb-4 rounded-md bg-white/30 text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            />

            {/* Email for Signup */}
            {isSignup && (
              <>
                <label className="block text-white text-lg font-medium mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full py-2 px-4 mb-4 rounded-md bg-white/30 text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
                />
              </>
            )}

            {/* Password */}
            <label className="block text-white text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full py-2 px-4 mb-6 rounded-md bg-white/30 text-black border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            />

            {/* Action Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-white text-black py-2 rounded-full cursor-pointer font-bold shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:shadow-[0_0_30px_rgba(255,255,255,0.9)] hover:scale-105 transition transform duration-300 mb-4"
            >
              {isSignup ? "Sign Up" : "Login"}
            </button>

            {/* Toggle Login/Signup */}
            <div className="text-center text-white">
              {isSignup ? (
                <span>
                  Already have an account?{" "}
                  <button className="underline font-semibold cursor-pointer" onClick={() => setIsSignup(false)}>
                    Login
                  </button>
                </span>
              ) : (
                <span>
                  Don’t have an account?{" "}
                  <button className="underline font-semibold cursor-pointer" onClick={() => setIsSignup(true)}>
                    Sign Up
                  </button>
                </span>
              )}
            </div>

            {/* Message */}
            {message && <p className="text-center text-white mt-4">{message}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;
