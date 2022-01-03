import React from "react";
import { useEffect,useState } from "react";
import Custombutton from '../CustomButton/customButton.component'
import './Products.style.scss'
const ProductsFetching =()=>{

    const [Productsdata,SetProductsdata] =useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
           .then(res => res.json())
           .then(json => SetProductsdata(json))
     }, [])

     const rows = [...Array( Math.ceil(Productsdata.length / 4) )];
     
     const productRows = rows.map( (row, idx) => Productsdata.slice(idx * 4, idx * 4 + 4) ) 
     // map the rows as div.row
    
    return (
    <>
    {
    productRows.map((row, idx) => (
       <div className="row" key={idx}>    
         { row.map( ({id,name,imageURL,description,price}) => (
         <div key={id} className="header-wraper">
             <div className="product-header">
             <h4>{name}</h4>
             </div>
             <div className="card">
            <img src={imageURL} className="product-image"/>
            <div className="card-content">
            {description}
            </div>
            </div>
            <div className="card-footer">
                <span className="price">MRP RS{price}</span>
                <span className="cart"> <Custombutton style={{minWidth:95}}>Buy Now</Custombutton></span>
            </div>
            
           
           
            
            


         </div>))}
       </div> )
   )}
    
     </>
     )
}

export default ProductsFetching