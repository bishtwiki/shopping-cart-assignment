import React from "react";

import HomepageLayout from "../../components/HomepageLayout/HomepageLayout.component";
import Banner from '../../components/Banner/Banner.component'
const Homepage = () => {
    return (
        <>
            <div className="container">
                
                <Banner />
                
                <HomepageLayout />
                </div>
                
           
        </>)
}

export default Homepage