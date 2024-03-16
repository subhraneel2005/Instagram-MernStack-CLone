import React, { useContext, useEffect, useState } from 'react'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import { Routes, Route} from "react-router-dom";
import Profile from './components/Profile';
import Loader from './components/Loader';
import UseContexrProvier from './contexts/UseContexrProvier';
import ShowPosts from './components/PostComponents/ShowPosts';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
      
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 

      return () => clearTimeout(timeout);
    }, []);

    if(isLoading){
      return <Loader/>;
    }
    else{
      return (
        <UseContexrProvier>
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/api/post' element={<ShowPosts/>}/>
        </Routes>
        </UseContexrProvier>
      )
    }
}

export default App