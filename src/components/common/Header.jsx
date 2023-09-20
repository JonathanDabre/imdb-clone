import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material'
import { Menu, BookmarkAdd, ArrowDropDown } from '@mui/icons-material';
import { logoURL } from '../../constants/constant'
import HeaderMenu from './HeaderMenu';

// Main css is applied to Toolbar so to handle toolbar css. So Toolbar + CSS = StyledToolBar
const StyledToolBar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  justify-content: space-between;
  & > *{
    padding: 2px 5px;
  }
  & > div{
    display: flex;
    align-items: center;
    cursor: pointer;
    & > p{
      font-size: 14px;
      font-weight: 600;
    }
  }

  & > p{
    font-size: 14px;
    font-weight: 600;
  }

`
const InputSearchField = styled(InputBase)`
  background: #ffffff;
  border-radius: 5px;
  padding: 0 10px;
  height: 30px;
  width: 55%;
  font-size: 14px;
`
// styled() is a material UI component, should only pass material UI component in it. To pass html component use strings and object.
const Logo = styled('img')({
  width: 64
})

const Header = () => {

  const [open, setOpen] = useState(null)
  

  const handleClick = (e)=>{
    setOpen(e.currentTarget)
  }
  const handleClose =()=>{
    setOpen(null);
  }

  return (
    <AppBar position='static'>
      <StyledToolBar>
        <Logo src={logoURL} alt="imdb-logo" />
        <Box onClick = {handleClick}>
          <Menu/>
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose = {handleClose}/>

        <InputSearchField placeholder='Search IMDB'/>
        <Typography>IMDB<Box component="span">Pro</Box></Typography>

        <Box>
          <BookmarkAdd/>
          <Typography>Watchlist</Typography>
        </Box>

        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ArrowDropDown/>
        </Box>

      </StyledToolBar>
    </AppBar>
  )
}

export default Header