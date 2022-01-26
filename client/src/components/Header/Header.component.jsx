import React,{useState} from "react";
import Cart from '../Cart/Cart.component'
import logo from '../../assets/logo.png'
import './Header.style.scss'
import {NavLink} from 'react-router-dom'
import CartIcon from '../Cart/Cart-icon.component'
import { connect } from "react-redux";
import { auth } from "../../firebase.util";


  /* Header Navigation */

const Header = ({currentUser,hidden}) => {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  
 return (
        <>
        <header className="header">
            <div className="container">
             <div className="row">
            <div className="col-ls-12">
            {/* TopNav Signin Menu */}
            
            <div className="topnav">
            <div className="topnav-right">
            {currentUser ? (
             <NavLink to='signin' onClick={() => auth.signOut()}> SignOut</NavLink>):
           ( <NavLink to='signin'> SignIn</NavLink> )
            }
            {!currentUser? <NavLink to ="signup">Register</NavLink>:null}
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
                <NavLink to="#">  <img className='logo' onClick={toggleClass} src={logo} alt="logo"></img></NavLink>
              <ul className="header-container">
              <NavLink to="/">  <li>Home</li></NavLink>
              <NavLink to="products"> <li>Products</li></NavLink>
            <li className="topnav-right bg-cart">
             <CartIcon/> 
            </li>
            </ul>
            {/* mobile nav menu */}
            {isActive && <div className="nav-container">
            <div className="close-nav" onClick={toggleClass}>x</div>
              <NavLink to="/">  <a>Home</a> </NavLink>
              <NavLink to="products"> <a>Products</a></NavLink>
            <a className="topnav-right bg-cart">
            
            </a>
            </div> }
            
            { hidden ? <Cart/>:null}
            </div>
            </div>
          </div>
          
           </div>
             </header>

        </>
    )


}

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
});



export default connect(mapStateToProps)(Header)