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
    const [topic, setTopic] = useState("");
    const [Imgurl, setImgurl] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [allPosts, setAllPosts] = useState([]);

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
          setMessage(response.data.message);
          toast.success("Login successfull");
          window.location = "/profile";

        } catch (error) {
          toast.error("Invalid credentials! Please check your username or password.");
        }
        setIsAuthenticated(true);
      };

    const handleLogout = async() => {
     try {
      await axios.post("http://localhost:3000/logout");
      setIsAuthenticated(false);
      window.location = '/login';
      toast.success("Logged out successfully");
     } catch (error) {
      toast.error("Error logging out");
     }
    }

    const getAllPosts = async() => {
        const res = await axios.get("http://localhost:3000/api/post");
        setAllPosts(res.data);
    }

    const createPost = async() => {
        axios.post("http://localhost:3000/api/post", {
            topic: topic,
            Imgurl :Imgurl,
        }).then(() => {
            setAllPosts(newPost => {
                const newArray = [...allPosts, newPost];
                return newArray;
            });
            setTopic("");
            setImgurl("");
        });
        window.location = "/profile"
    }

    const deletePost = (id) => {
        axios.delete(`http://localhost:3000/api/${id}`).then(() => {
            setAllPosts(oldPosts => {
                const afterDeleted = oldPosts.filter(post => post._id !== id);
                return afterDeleted;
            })
        }).catch(err=>{console.log(err)});
    };

  return (
    <UseContext.Provider value={{fullName,setFullName,username,setUsername,email,setEmail,password,setPassword,handleRegister, handleLogin,message, topic,setTopic,Imgurl, setImgurl,allPosts, getAllPosts, createPost,deletePost,isAuthenticated, handleLogout}}>
        {children}
    </UseContext.Provider>
  )
}

export default UseContexrProvier