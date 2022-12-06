import { useTheme } from '@emotion/react'
import { useMediaQuery } from '@mui/material';
import React from 'react'
import { Appbards } from './Appbards';
import { Appbarm } from './Appbarm';

export  const Appbar = () => {
  const theme=useTheme();
  const matches= useMediaQuery(theme.breakpoints.down('md'));
  
  return (

    
      <>
      {matches ?
      (
      <Appbards matches={matches}/>):(
      <Appbarm matches={matches}/>)
    }
      </>

    
  )
}
