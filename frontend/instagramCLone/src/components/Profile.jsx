import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Sidebar from './HomeComponents/Sidebar';
import Stories from './HomeComponents/Stories';
import Posts from './HomeComponents/Posts';
import { FaUser } from 'react-icons/fa';
function Profile() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Make a GET request to your backend profile endpoint
    axios.get('/profile')
      .then(response => {
        setUser(response.data);
        // Show success toast
        toast.success('Authentication successfull');
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
        
        <div className='block w-full md:w-[80%]'>
          <div className='flex justify-between'>
            <Stories/>
            {/* <div className=' mt-6 ml-4 flex gap-4'><FaUser/><p></p></div> */}
          </div>
          <Posts/>
        </div>
      </div>
    </div>
  )
}

export default Profile