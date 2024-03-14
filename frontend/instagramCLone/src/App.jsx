import React, { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import { Routes, Route} from "react-router-dom";
import Profile from './components/Profile';
import Loader from './components/Loader';

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
        <Routes>
          <Route path='/' element={<Register />}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      )
    }
}

export default App