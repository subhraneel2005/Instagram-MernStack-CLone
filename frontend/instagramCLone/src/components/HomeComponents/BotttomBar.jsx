import React, { useContext } from 'react';
import { TbCirclePlus } from "react-icons/tb";
import {useNavigate} from "react-router-dom";;
import UseContext from '../../contexts/UseContext';
import { CiLogout } from "react-icons/ci";

function BotttomBar() {

    const navigate =useNavigate();
    const createPostRoute = "/api/post";
    const {handleLogout} = useContext(UseContext);

  return (
    <div className='w-full py-3 px-4 md:hidden flex justify-evenly items-center bg-slate-300 text-slate-900'>
        <TbCirclePlus size={40} onClick={()=>navigate(createPostRoute)}/>
        <CiLogout size={40} onClick={handleLogout}/>
    </div>
  )
}

export default BotttomBar