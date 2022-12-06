import { Button, IconButton ,Box} from "@mui/material";
import {  styled } from "@mui/system";
import { colors } from "../theme";



export const Product=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    [theme.breakpoints.up('md')]:{
        position:'reletive'
    }
}));
export const ProductImage=styled('img')(({ src,theme}) =>({

    src:`url(${src})`,
    width:'100%',
    backgroundColor:colors.light,
    padding:'10px',
    [theme.breakpoints.down('md')]:{
        width: '80%',
        padding:'24px'
    
    }

}));
export const ProductActionButton=styled(IconButton)(()=>({
background:colors.shaft,
margin:4
}));
export const ProductFavButton=styled(ProductActionButton)(({isfav,theme})=>({
    color:isfav?colors.primary:colors.shaft,
    [theme.breakpoints.up("md")]:{
    position:'absolute',
    right:0,
    top:0,
},

}));
export const ProductAddTocart =styled(Button)(({show,theme})=>({

    width:'120px',
    fontSize:'12px',
    [theme.breakpoints.up('md')]:{
        position:'absolute',
        bottom:'2%',
        width:'300px',
        padding:'10px 5px',
    },
background:colors.secondary,
opacity:0.9,

}));
export const ProductMetaWrapper=styled(Box)(({show,theme})=>({
    padding:4,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',

}));
export const ProductActionWrapper=styled(Box)(({show,theme})=>({
    [theme.breakpoints.up('md')]:{
        display:show?'visible':'none',
        position:'absolute',
        right:0,
        top:'20%',
        
    }

}));