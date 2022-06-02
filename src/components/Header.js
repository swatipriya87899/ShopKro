import React from 'react';
import { AppBar } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import './Header.css';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';

const Header = () => {

  //cart product count
  const cart = useSelector((state)=>state.cartProduct.items.length);
  console.log(cart)

  return (
    <div>
        <AppBar className='appbar'>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className='company_name' style={{fontSize:"30px"}}>ShopKaro</div>
            <div>
            <Badge color="secondary" badgeContent={cart}><ShoppingCartCheckoutIcon></ShoppingCartCheckoutIcon></Badge>
            </div>
            </div>
        </AppBar>
    </div>
  )
}

export default Header