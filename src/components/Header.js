import React from 'react';
import { AppBar } from '@mui/material';
import { Typography } from '@mui/material';
import './Header.css'

const Header = () => {
  return (
    <div>
        <AppBar className='appbar'>
            <Typography component="div" className='company_name' style={{fontSize:"30px"}}>ShopKaro</Typography>
        </AppBar>
    </div>
  )
}

export default Header