import React from "react";
import './homepage.style.scss'
import {Container} from 'react-bootstrap'
import HomepageLayout from "../../components/HomepageLayout/HomepageLayout.component";
import Banner from '../../components/Banner/Banner.component'
import Header from "../../components/Header/Header.component";
const Homepage=()=>{
    return (
    <>
    
    <Header></Header>
    <Container>
        
        <Banner></Banner>
    <HomepageLayout/>
    </Container>
    
    </>)
}

export default Homepage