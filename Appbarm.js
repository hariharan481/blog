import { Search } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, Appbarcontainer, AppbarHeader, MyList } from '../../styles/appbar'
import { Action } from './Action'

export const Appbarm = ({matches}) => {
  const Component=matches?ActionIconsContainerMobile:
  ActionIconsContainerDesktop;

  return (
    <div>
        
        <Appbarcontainer>
    <AppbarHeader>My Bags</AppbarHeader>
    <MyList type='row'>
    <ListItemText primary="Home"/>
    <ListItemText primary="products"/>
    <ListItemText primary="category"/>
    <ListItemText primary="contacts"/>
    <ListItemButton>
        <ListItemIcon>
            <Search/>
        </ListItemIcon>
    </ListItemButton>
   </MyList>
   <Action matches={matches}/>
</Appbarcontainer>

    </div>
  )
}
