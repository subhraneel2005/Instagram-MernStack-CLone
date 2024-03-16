import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseContext from '../contexts/UseContext';

function LoginPage() {

    const {handleLogin,username,password,setUsername,setPassword} = useContext(UseContext)
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white select-none">
      <header className="py-10">
        <ToastContainer/>
        {/* Instagram-like logo */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdJMI9-ZdTJmpzVfjX6AL4rwRP8l-vWYDklw&usqp=CAU" alt="Instagram Logo" className="w-32" />
      </header>
      <main className="bg-gray-50 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login to your account</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <h1 className='text-xl text-center'>New user <a className=' decoration-black underline cursor-pointer' href="/">Register</a></h1>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </div>
      </main>
    </div>
  )
}

export default LoginPage