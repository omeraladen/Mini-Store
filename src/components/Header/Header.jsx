import React from 'react'
import Logo from '../../assets/tree.png'
import Search from '../../assets/search.png'
import Basket from '../../assets/basket.png'
import Lock from '../../assets/lock.png'
import './header.styles.scss';


const Header = () => {
  return (
    <div className='header'>
        <div className="top-section">
            <div className="logo">
                <img src={Logo} alt="logo" />
                <p>Slice</p>
            </div>
            <div className="search">
                <input type="text" placeholder='Site amazing...' className='input'/>
                <img src={Search} alt="search" className='search-icon'/>
            </div>
            <div className="icons">
                <img src={Lock} alt="" className='lock'/>
                <img src={Basket} alt=""  className='basket'/>
            </div>
        </div>
    <hr className='line'/>
        <div className="bottom-section">
            <div className="links">
                <a href="">prime video</a>
                <a href="">Amazon <i class="fa-solid fa-caret-down"></i></a>
                <a href="">Today's Deals <i class="fa-solid fa-caret-down"></i></a>
                <a href="">Electronics <i class="fa-solid fa-caret-down"></i></a>
                <a href="">Food & Grocery <i class="fa-solid fa-caret-down"></i></a> 
                <a href="">Prime</a>
                <a href="">Buy Agin</a>
                <a href="">Shopper Toolkit <i class="fa-solid fa-caret-down"></i></a>
                <a href=""> Health & Personal Care <i class="fa-solid fa-caret-down"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Header;


