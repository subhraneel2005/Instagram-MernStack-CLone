import React from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

  return (
    <div className='h-[200px] w-[300px] rounded-xl bg-pink-400 flex items-center justify-around'>
        <div className='block'>
            <TextField id="outlined-basic" label="Topic" variant="outlined" />
            <Button
            component="label"
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            >
            Upload Media
            <VisuallyHiddenInput type="file" />
            </Button>
        </div>
    </div>
  )
}

export default ShowPosts