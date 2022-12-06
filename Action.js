import { Favorite, Person, ShoppingCart } from '@mui/icons-material'
import { Divider, ListItemButton, ListItemIcon } from '@mui/material'
import React from 'react'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar'
import { colors } from '../../styles/theme'

export const 
 Action= ({matches}) =>{
    const Component=matches?ActionIconsContainerMobile:
    ActionIconsContainerDesktop;

  return (
    <div>
        <Component>
 <MyList type="row">
            <ListItemButton sx={{
                justifycontent:"center"
            }}>
                <ListItemIcon sx={{
                    display:"flex",
                    justifycontent:"center",
                    color:matches&&colors.secondary
                }}>
                    <ShoppingCart/>
                </ListItemIcon>
            </ListItemButton  >
            <Divider orientation="vertical" flexItem/>
            <ListItemButton sx={{
                justifycontent:"center"

            }}>
                <ListItemIcon sx={{
                    display:"flex",
                    justifycontent:"center",
                    color:matches&&colors.secondary
                }}
                >
                    <Person/>
                </ListItemIcon>
            </ListItemButton >
            <Divider orientation="vertical" flexItem/>
            <ListItemButton sx={{
                justifycontent:"center"
            }}>
                <ListItemIcon sx={{
                    display:"flex",
                    justifycontent:"center",
                    color:matches&&colors.secondary
                }}>
                    <Favorite/>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
        </MyList>
        </Component>
        
    </div>
       

  )
}
