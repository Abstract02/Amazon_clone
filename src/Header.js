import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}]=useStateValue();

  return (
    <div className='header'>
      <Link to = "/">
      <img className='header_logo' src="https://samharrington.com/wp-content/uploads/2017/06/amazon-logo-white.png" alt ="amazon_logo" />
      </Link>
      <div className='header_search'>
        <input className='header_searchinput' type='text' />
        <SearchIcon className='header_searchicon' />
      </div>
      <div className='header_nav'>
        <Link to='/login'>
        <div className='header_option'>
          <span className='header_optionline1'>Hello</span>
          <span className='header_optionline2'>Sign In</span>
        </div>
        </Link>
        <div className='header_option'>
          <span className='header_optionline1'>Return</span>
          <span className='header_optionline2'>Order</span>
        </div>
        <div className='header_option'>
          <span className='header_optionline1'>Your</span>
          <span className='header_optionline2'>Prime</span>
        </div>
        <Link to = '/checkout'>
        <div className='header_cart'>
          <ShoppingCartIcon className='header_cartIcon' />
          <span className='header_itemcounter'>{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header