
import { AppBar, Button, Toolbar } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import { useEffect } from 'react';

    

export const Navbar = () => {
  useEffect(() => {
document.title="my resbonsive blog";
  
      
  
  }, []);
  return (
    <div>

<Container sx={{maxwidth:'xl',background:"#fff"}}>

<Button>hari</Button>  
</Container>
    </div>
  )
}
