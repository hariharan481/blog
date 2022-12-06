import React from 'react'
import { Bannercontainer, Bannercontent, BannerDescription, BannerImage, BannerTitle } from '../styles/Banner/Bannercontainer'
import { useTheme } from '@emotion/react'
import { badgeClasses, Typography, useMediaQuery } from '@mui/material';

export const Banners = () => {
  const theme=useTheme();
  const matches= useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div>
<Bannercontainer>
<BannerImage src="https://images.pexels.com/photos/13198519/pexels-photo-13198519.jpeg?auto=compress&cs=tinysrgb&w=600"/>


<Bannercontent>
 
<BannerTitle variant='h3'>New Collections bags..</BannerTitle>
<BannerDescription varient="subtitle"> 
  
    hi iam cutie hariharan happy to invite my web page
  
  </BannerDescription>
</Bannercontent>
</Bannercontainer>

    </div>
    
    
  )
}
