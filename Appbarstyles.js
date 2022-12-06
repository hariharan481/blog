import { Box } from "@mui/system";
import{styled} from"@mui/material/styles";
import { colors } from "../theme";
import"@fontsource/montez";

import { List } from "@mui/material";
export const Appbarcontainer=styled(Box)(()=>({
display:'flex',
marginTop:4,
justifyContent:'center',
alignItems:'center',
padding:'2px 8px',
}));
 export const AppbarHeader=styled(Box)(()=>({
    padding:'4px',
    flexGrow: 1,
    fontSize:'4rem',
fontFamily:'"Montez","cursive"',
    color:colors.secondary,
}));
export const MyList=styled(List)(({type})=>({
 display:type ==='row'?'flex':'block',
   flexGrow:3,
   justifyContent:'center',
   alignItems:'center',
}));
export const ActionIconsContainerMobile=styled(Box)(()=>({
    display:'flex',
    background:colors.primary,
    position:'fixed',
    bottom:0,
    left:0,
    right:0,
    width:'100%',
    alignItems:'center',
    zIndex:99,
    borderTop:`1px solid ${colors.border}`


})); 
export const ActionIconsContainerDesktop=styled(Box)(()=>({
    flexGrow:0
}));

 




