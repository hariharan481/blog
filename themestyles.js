import { createTheme } from "@mui/material/styles"
import React, { Component } from 'react'

export const colors={


    primary: "#5f2c3e",
    secondary:"#d1adcc",
    success:"#d1adcc",
    info:"#00a2ff",
    danger:"#ff5722",
    warning:"#ffc107",
    dark:"#0e1b20",
    light:"#aaa",
    muted:"#abafb3",
    border:"#dodfe1",
    inverse:"2f3d4a",
    shaft:"#333"

}
export const theme=createTheme({
    palette:{
        primary:{
           main: colors.primary
        },
        secondary:{
            main:colors.secondary
        }
        
                
            },
            components:{
                MuiButton:{
                    defaultProps:{
                        disableRipple: true,
                        disableElevation: true
                    
                }
            }


        }
    
      
    
    


});

