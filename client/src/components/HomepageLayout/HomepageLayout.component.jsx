import React from "react"
import HomepageProduct from "../HomepageProduct/HomepageProduct"
import { useEffect,useState } from "react"

const HomepageLayout =()=>{

    const [bannercategory,SetbannerCategory]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(json=>SetbannerCategory(json)) 
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
     const SortBanner = bannercategory.sort(sortByProperty('order'));
    return (
    <>
    
    {
       SortBanner.filter(sortval=>sortval.enabled===true).map(({id,key,...otherProps})=>(
        <HomepageProduct key={id} btntext= {key} {...otherProps}/>
    ))}
    </>
    )

}

export default HomepageLayout