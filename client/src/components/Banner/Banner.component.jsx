import React from 'react';
import './Banner.style.scss'
import {HocWrapper} from '../HOC/WithData.js'
import Carousel from 'nuka-carousel';
const Banner =({data})=>{
 return (
    <>
    <div className="banner">
     <Carousel>
        
      { data.filter(sortval=>sortval.isActive===true).map(({id,bannerImageUrl,bannerImageAlt})=>(
      <img key ={id} src={bannerImageUrl} alt={bannerImageAlt}/>
      ))
      }
      </Carousel> 
      </div>
      </>
   )
}
   

export default HocWrapper(Banner,'http://localhost:5000/banners') 