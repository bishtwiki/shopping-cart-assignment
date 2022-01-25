import React from 'react';

import './cart-item.style.scss'
import { connect } from 'react-redux';
import { Additem, Removeitem, ClearCart } from '../../Redux/cart/cart.action'
const CartItem = ({ item, Additem, Removeitem, ClearCart }) => {
  const { name, imageURL, price, sku, quantity } = item


  return (

    <>

      <div className='cart-item'>
        <img src={imageURL} alt={sku} className='item-image' />
        <div className='item-details'>
          <p className='name'>{name}</p>
          <div className="counter">
            <div className="btn" onClick={() => Additem({ item })}>+</div>
            <div className="count">{quantity}</div>

            {<div className={quantity <= 1 ? ' disabledaction ' : 'btn'} onClick={() => Removeitem({ item })}>-</div>}




            <span className='price'>
              x &nbsp;    Rs {price}
            </span>

          </div>
        </div>
        <div className='total'>

          <p className='amount'>
            Rs {quantity * price}
          </p>

        </div>
        <div className='arrow' onClick={() => ClearCart(item)}>
          x
        </div>
      </div>



    </>
  )
};

const mapdispatchtoProps = (dispatch) => ({
  Additem: items => dispatch(Additem(items)),
  Removeitem: items => dispatch(Removeitem(items)),
  ClearCart: items => dispatch(ClearCart(items))
})

export default connect(null, mapdispatchtoProps)(CartItem);