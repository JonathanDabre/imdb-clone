import React from 'react'
import { Menu, MenuItem } from '@mui/material'

const HeaderMenu = (props) => {
    let {open, handleClose} = props; //event.currentTarget comes here.
    const openMenu = Boolean(open) // 0 for null, 1 for anything else
    

  return (
    <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu} //is it open?
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        <MenuItem onClick={handleClose}>Upcoming</MenuItem>
      </Menu>
  )
}

export default HeaderMenu