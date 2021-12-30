import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.style.scss'




const Banner =()=>{

    const [Banner,Setbanner]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/banners')
        .then(res=>res.json())
        .then(json=>Setbanner(json)) 
    },[])

    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }

     const SortBanner = Banner.sort(sortByProperty('order'));

  return ( <>
  
<Carousel nextIcon="NEXT" nextLabel="Next" prevIcon="PREV">

{ SortBanner.filter(sortval=>sortval.isActive===true).map(({id,bannerImageUrl,bannerImageAlt})=>(
  <Carousel.Item key ={id}>
  <img
  
     className="d-block w-100"
    src={bannerImageUrl}
    alt={bannerImageAlt}
/>
</Carousel.Item>
))}

</Carousel>

    </>)}

export default Banner