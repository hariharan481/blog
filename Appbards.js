import { IconButton, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import React from 'react'
import { Appbarcontainer, AppbarHeader, } from '../../styles/appbar'
import { MyList } from '../../styles/appbar'
import { Menu, Search } from '@mui/icons-material'
import { Action } from './Action'

export const Appbards = (matches) => {
  return (
<div> 
  
<Appbarcontainer>
    <IconButton>
      <Menu/>
    </IconButton>
      <AppbarHeader textAlign={"center"} variant="h4">
        My bags
      </AppbarHeader>
      <IconButton>
        <Search/>
      </IconButton>
      <Action matches={matches}/>
    
</Appbarcontainer>


</div>
    
    
  )
}
