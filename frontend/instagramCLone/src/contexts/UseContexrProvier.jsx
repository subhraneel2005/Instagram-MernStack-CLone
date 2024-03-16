import React, { useState } from 'react'
import UseContext from './UseContext'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UseContexrProvier({children}) {

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
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
    }};

    const handleLogin = async() => {
        try {
          const response = await axios.post("http://localhost:3000/login",{
          username, password
        });
          setIsAuthenticated(true);
          setMessage(response.data.message);
          toast.success("Login successfull");
          window.location = "/profile";

        } catch (error) {
          toast.error("Invalid credentials! Please check your username or password.");
        }
        
      };

  return (
    <UseContext.Provider value={{fullName,setFullName,username,setUsername,email,setEmail,password,setPassword,handleRegister, handleLogin,message}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContexrProvier