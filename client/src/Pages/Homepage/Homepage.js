import React from "react";
import './homepage.style.scss'
import {Container} from 'react-bootstrap'
import HomepageLayout from "../../components/HomepageLayout/HomepageLayout.component";
import Banner from '../../components/Banner/Banner.component'
const Homepage=()=>{
    return (
    <>
    <Container>
        <Banner></Banner>
    <HomepageLayout/>
    </Container>
    
    </>)
}

export default Homepage