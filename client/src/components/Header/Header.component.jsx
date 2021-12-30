import React from "react";
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.svg'
import './Header.style.scss'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="header">
                <Container>
                    <Navbar className="justify-content-end spacing-nav ">
                        <Nav className="mr-auto" >
                            <NavLink className="upper-nav" to="signin">SignIn</NavLink>
                        
                            <NavLink className="upper-nav" to="register">Register</NavLink>
                            </Nav>
                    </Navbar>
                </Container>
                <Navbar className="navbar-shadow" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><img src={logo} className="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="navbar-bottom" id="basic-navbar-nav nav-base">
                            <Nav className="me-auto navbar-custom">
                                <NavLink className="upper-nav" to="/">Home</NavLink>
                                <NavLink  className="upper-nav"to="products">Products</NavLink>

                            </Nav>
                            <Nav className="cart-style">
                                <Nav.Link href="#deets" ><img className="cart-image" src={cart} width="27px" /></Nav.Link>
                                <Nav.Link href="#deets" >0 Items</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

        </>
    )


}


export default Header