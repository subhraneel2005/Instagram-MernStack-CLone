import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { redirect } from 'react-router-dom';

function Register() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleRegister = async() => {
  try {
    const response = await axios.post("http://localhost:3000/register",{
      fullName, username, password, email
     });
     setIsAuthenticated(true);
     toast.success(response.data.message);
     window.location = "/profile";
     
  } catch (error) {
    toast.error("Username already exists");
  }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white select-none">
      <ToastContainer/>
      <header className="py-6">
        {/* Your logo */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJMI9-ZdTJmpzVfjX6AL4rwRP8l-vWYDklw&usqp=CAU" alt="Logo" className="w-32" />
      </header>
      <main className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Create an Account</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <h1 className='text-xl text-center'>Already a user <a className=' decoration-black underline cursor-pointer' href="/login">Login</a></h1>
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </div>
      </main>
    </div>
  );
}

export default Register;
