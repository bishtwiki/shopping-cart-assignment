import React from "react";
import { useEffect, useState } from "react";
import Custombutton from '../CustomButton/customButton.component'
import './Products.style.scss'
import { Additem } from '../../Redux/cart/cart.action'
import { connect } from "react-redux";
const ProductsFetching = ({ Additem }) => {

  const [Productsdata, SetProductsdata] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(json => SetProductsdata(json))
  }, [])

  
  const rows = [...Array(Math.ceil(Productsdata.length / 4))];

  const productRows = rows.map((row, idx) => Productsdata.slice(idx * 4, idx * 4 + 4))
  // map the rows as div.row
  
  
  return (
    <>
      {
        productRows.map((row, idx) => (
          
          <div className="row" key={idx}>
            {row.map((item) =>
            
            (


              <div key={item.id} className="header-wraper">
                <div className="product-header">
                  <h4>{item.name}</h4>
                </div>
                <div className="card">
                  <img src={item.imageURL} className="product-image" />
                  <div className="card-content">
                    {item.description}
                  </div>
                </div>
                <div className="card-footer">
                  <span className="price">MRP RS{item.price}</span>
                  <div style={{display:'none'}}>{item.quantity=1}</div>
                  <span className="cart"> <Custombutton style={{ minWidth: 95 }} onClick={() => Additem({ item })}>Buy Now</Custombutton></span>
                </div>

              </div>))}
          </div>)
        )}

    </>
  )
}

const mapdispatchtoProps = (dispatch) => ({
  Additem: item => dispatch(Additem(item))
})

export default connect(null, mapdispatchtoProps)(ProductsFetching)