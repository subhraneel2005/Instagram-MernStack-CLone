import React, { useContext } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UseContext from '../../contexts/UseContext';

function ShowPosts() {
    
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    const {topic,setTopic,imgUrl,setImgUrl,createPost} = useContext(UseContext);


  return (
    <div className='h-[200px] w-[300px] rounded-xl bg-pink-400 flex items-center justify-around'>
        <div className='block'>
            <TextField id="outlined-basic" label="Topic" variant="outlined" value={topic} onChange={(e) => setTopic(e.target.value)}/>
          
            <button onClick={createPost}>Post</button>
        </div>
    </div>
  )
}

export default ShowPosts