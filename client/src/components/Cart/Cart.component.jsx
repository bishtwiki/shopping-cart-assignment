
import React from "react";
import './cart.scss'
import Custombutton from '../CustomButton/customButton.component'
import { CartToggleAction } from '../../Redux/cart/cart.action';
import CartItem from '../Cart/Cart-Item.component'
import { connect } from "react-redux";


const Cart = ({ cartItems, CartToggleAction }) => {

  // Total Price of cart
  const sumall = cartItems.map(items => items.price * items.quantity).reduce((prev, curr) => prev + curr, 0);

return (<>

    <div className="modal">
      <div className="cart-dropdown">
        <div className="cart-items">
          <div className="cart-header">
            My Cart ({cartItems.length})

            <span className="close" onClick={CartToggleAction} >x</span>
          </div>


          {cartItems.length >= 1 ? cartItems.map(cartItem => (

            <CartItem key={cartItem.sku} item={cartItem} />

          )) : <div className="empty">
            <b>No items in your cart</b>
            <p>Your favourite items are just a click away</p>

          </div>

          }

        </div>
        {cartItems.length >= 1 ? <div className="advertisment">
          <p>You Wouldn't find it cheaper anywhere</p>
        </div> : null}


        <div className="footer-item">

          {cartItems.length >= 1 ?
            <div className="cart-footer">
              <p>Promo code can be applied on payment page</p>

              <Custombutton>Proceed to checkout  <span style={{ float: 'right', fontWeight: 'lighter' }}>Rs{sumall} &nbsp; &#x3e;  </span> </Custombutton>
            </div>

            :
            <div className="cart-footer">
              <Custombutton>Start shopping</Custombutton>
            </div>
          }

        </div>
      </div>
    </div>

  </>)

}


const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const mapDispatchtoProps = dispatch => ({
  CartToggleAction: () => dispatch(CartToggleAction())
})
export default connect(mapStateToProps, mapDispatchtoProps)(Cart)