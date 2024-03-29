import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Sidebar from './HomeComponents/Sidebar';
import Stories from './HomeComponents/Stories';
import Posts from './HomeComponents/Posts';
import { FaUser } from 'react-icons/fa';
import UseContext from '../contexts/UseContext';
import BotttomBar from './HomeComponents/BotttomBar';

function Profile() {

  const [user, setUser] = useState(null);
  const {isAuthenticated} = useContext(UseContext);

  useEffect(() => {
    // Make a GET request to your backend profile endpoint
    axios.get('/profile')
      .then(response => {
        setUser(response.data);
        // Show success toast
      })
      .catch(error => {
        // Show error toast
        toast.error(`Failed to fetch profile: ${error.response.data.error}`);
      });
  }, []);
  
    return (
      <div className='w-full min-h-screen flex'>
        <ToastContainer/>
        <div className='flex justify-evenly w-full'>
          <div className='w-[0%] md:w-[20%]'>
            <Sidebar/>
          </div>
          
          <div className='block w-full md:w-[80%] container'>
            <div className='flex justify-between'>
              <Stories/>
              {/* <div className=' mt-6 ml-4 flex gap-4'><FaUser/><p></p></div> */}
            </div>
            <Posts/>
            <div className='sticky bottom-0'><BotttomBar/></div>
          </div>
        </div>
      </div>
    )
}

export default Profile