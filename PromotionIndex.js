import { Typography } from '@mui/material';
import { Box, styled } from '@mui/system'
import React from 'react'
import { colors } from '../styles/theme'

export const Promotionscontainer = styled(Box)(({theme}) => ({
    [theme.breakpoints.up('md')]:{
     padding:'40px 0px 40px  0px'   
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'50px 0px 50px 0px',
    overflow:'hidden',
    background:colors.success

}));
export const MessageText=styled(Typography)(({theme})=>({
    fontFamily:'"Montez","cursive"',
    fontSize:"3rem",
    [theme.breakpoints.down('md')]:
    {
   fontSize:"1.5rem",

    },
    color:colors.dark,
    justifyContent:"center",

}))
