import { ThemeProvider } from "@mui/system";
import { theme } from "./styles/theme";
import{useEffect}from"react";

import { Appbar } from "./components/Appbar";
import { Banners } from "./Banner/Banners";
import { Promotionscontainer } from "./promotions";
import { Promotion } from "./components/promotions";
import { Products } from "./products";
import { Typography,Box } from "@mui/material";





function App() {
  useEffect(() => {
    document.title="hello"
  

   
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
     
        <Appbar/>
       <Banners/>
        <Promotion/>
        <Box display="flex" justifyContent={"center"} sx={{p:4}}>
        <Typography variant="h4" >our Products</Typography>
        </Box>
       
        <Products/>
      
      </ThemeProvider>
 

    </div>
  );
}

export default App;
