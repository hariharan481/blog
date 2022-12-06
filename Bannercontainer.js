import styled from '@emotion/styled'
import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import { colors } from '../theme';


export const Bannercontainer = styled(Box)(({theme})=>( {
    display:'flex',
    justifyContent:'center',
    width:'100%',
    height:'100%',
    padding:'0px 0px',
 backgroundColor:colors.danger,
 [theme.breakpoints.down('sm')]:{
    flexDirection:'column',
    alignItems:'center'
 }

}));
export const Bannercontent = styled(Box)(()=>( {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    maxWidth:420,
    padding:'30px'
}));
export const BannerTitle=styled(Typography)(({theme})=>({
    lineHeight:1.5,
    fontSize:'72px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]:{
        fontSize:'42px'
    }
    

}));
export const BannerDescription=styled(Typography)(({theme})=>({
    lineHeight:1.25,
    letterSpacing:1.25,
    marginBottom:'3rem',
    [theme.breakpoints.down('sm')]:{
        lineHeight:1.25,
        letterSpacing:1.25,
    }

}));
export const BannerImage=styled('img')(({ src,theme})=>({
    width:'500px',
    src:`url(${src})`,

    [theme.breakpoints.down('md')]:{
        width:'350px',
       },
       [theme.breakpoints.down('sm')]:{
        width:'400px',
        height:'300px',
       },

}));


