import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UseContext from '../../contexts/UseContext';

function ShowPosts() {
    
    

    const {topic,setTopic,Imgurl,setImgurl,createPost} = useContext(UseContext);

    const handleCancelPost = () => {
      window.location = "/profile";
    }


  return (
    <div className='h-screen w-full bg-gray-200 flex items-center justify-center select-none'>
        <div className='flex items-center justify-center h-[300px] rounded-xl p-4 bg-gray-400 w-[300px]'>
            <div className='block'>
              <h1 className=' text-2xl text-white font-bold text-center mb-3'>Post here</h1>
            <input type="text" className='border-none outline-none px-4 py-2 rounded-xl mb-3 text-white bg-slate-600' placeholder='Topic' value={topic} onChange={(e)=>setTopic(e.target.value)}/>
            <input type="text" className='border-none outline-none px-4 py-2 rounded-xl mb-3 text-white bg-slate-600' placeholder='ImgUrl' value={Imgurl} onChange={(e)=>setImgurl(e.target.value)} />
           <div className='flex gap-3'>
            <button className=' p-3 rounded-xl cursor-pointer bg-blue-500 text-blue-100' onClick={createPost}>Post</button>
            <button className=' p-3 rounded-xl cursor-pointer bg-red-500 text-red-100' onClick={handleCancelPost}>Cancel</button>
           </div>
            </div>
        </div>
    </div>
  )
}

export default ShowPosts