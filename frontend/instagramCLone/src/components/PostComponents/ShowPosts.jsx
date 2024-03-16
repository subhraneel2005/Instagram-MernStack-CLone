import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UseContext from '../../contexts/UseContext';

function ShowPosts() {
    
    

    const {topic,setTopic,Imgurl,setImgurl,createPost} = useContext(UseContext);


  return (
    <div className='h-[200px] w-[300px] rounded-xl bg-pink-400 flex items-center justify-around'>
        <div className='block'>
            <input type="text" placeholder='Topic' value={topic} onChange={(e)=>setTopic(e.target.value)}/>
            <br />
            <input type="text" placeholder='ImgUrl' value={Imgurl} onChange={(e)=>setImgurl(e.target.value)} />
            <button onClick={createPost}>Post</button>
        </div>
    </div>
  )
}

export default ShowPosts