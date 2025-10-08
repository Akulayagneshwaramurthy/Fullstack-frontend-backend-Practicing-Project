import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const navigate = useNavigate();

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
      navigate("/home");
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto mb-4"></div>
            <p className="text-white text-lg">Preparing Your Library...</p>
          </div>
        </div>
      ) : !startedPage ? (
        // Initial "Get Start" page
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex flex-col items-center justify-center text-center px-4 py-8">
          <div className="max-w-2xl mx-auto">
            
            <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text">
              Library Books
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto">
              Discover a world of knowledge, stories, and research material. 
              Your digital library awaits with books for every reader.
            </p>
            
            <button
              onClick={handleGetStart}
              className="group bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white py-4 px-12 rounded-full font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 transform"
            >
              <i className="fa-solid fa-play mr-3 group-hover:scale-110 transition-transform"></i>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        // Login/Signup form
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-md">
            {/* Back Button */}
            <button
              onClick={() => setStartedPage(false)}
              className="flex items-center gap-2 cursor-pointer text-white/80 hover:text-white mb-6 transition-colors group"
            >
              <i className="fa-solid fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
              Back to Home
            </button>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {isSignup ? "Create Account" : "Welcome Back"}
                </h2>
                <p className="text-gray-300">
                  {isSignup ? "Join our library community" : "Sign in to your account"}
                </p>
              </div>

              {/* Form */}
              <div className="space-y-4">
                {/* Username */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <i className="fa-solid fa-user mr-2 text-blue-400"></i>
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  />
                </div>

                {/* Email for Signup */}
                {isSignup && (
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      <i className="fa-solid fa-envelope mr-2 text-purple-400"></i>
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                    />
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    <i className="fa-solid fa-lock mr-2 text-green-400"></i>
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full py-3 px-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  />
                </div>

                {/* Action Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r cursor-pointer from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform mt-6"
                >
                  {isSignup ? "Create Account" : "Sign In"}
                </button>

                {/* Toggle Login/Signup */}
                <div className="text-center pt-4">
                  <p className="text-gray-400">
                    {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                      className="text-blue-400 hover:text-blue-300 cursor-pointer font-semibold transition-colors"
                      onClick={() => setIsSignup(!isSignup)}
                    >
                      {isSignup ? "Sign In" : "Create Account"}
                    </button>
                  </p>
                </div>

                {/* Message */}
                {message && (
                  <div className="mt-4 p-3 rounded-lg bg-white/10 border border-white/20">
                    <p className="text-white text-center text-sm">{message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;