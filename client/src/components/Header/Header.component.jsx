import React from "react";

import logo from '../../assets/logo.png'
import cart from '../../assets/cart.svg'
import './Header.style.scss'
import {NavLink} from 'react-router-dom'

  /* Header Navigation */

const Header = () => {
 return (
        <>
        <header className="header">
            <div className="container">
             <div className="row">
            <div className="col-ls-12">
            {/* TopNav Signin Menu */}
            
            <div className="topnav">
            <div className="topnav-right">
            <NavLink to='signin'> SignIn</NavLink>
            <NavLink to ="register">Register</NavLink>
            </div>
            </div>
            </div>
            </div>
            {/* Topnav End here */}

            {/* Main Menu Start */}
            <div className="clear"></div>
            <div className="row">
                <div className="col-ls-12">
                <div className="topnav">
                <NavLink to="/">  <img className="logo" src={logo} alt="logo"></img></NavLink>
              <ul className="header-container">
              <NavLink to="/">  <li>Home</li></NavLink>
              <NavLink to="products"> <li>Products</li></NavLink>
            <li className="topnav-right bg-cart ">
             
                 <img className="cart-image" src={cart} alt="cart" /> 0 items
                 
            </li>
            </ul>
            </div>
            </div>
         
             </div>
             </div>
             </header>

        </>
    )


}


export default Header