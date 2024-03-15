import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
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
    <div>
      <ToastContainer/>
      <h1>Welcome to Profile page</h1>
    </div>
  )
}

export default Profile