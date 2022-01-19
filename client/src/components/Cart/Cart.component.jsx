
import React from "react";
import './cart.scss'
import Custombutton from '../CustomButton/customButton.component'
import { CartToggleAction} from '../../Redux/cart/cart.action';
import { connect } from "react-redux";

const Cart =({CartToggleAction})=>{
    
    return (<>
     
    <div className="cart-dropdown">
    <div className="cart-header">
        My Cart (1 item) 
        <span className="close" onClick={CartToggleAction}>x</span>
        </div>
        <div className="cart-items">
            <span>No Items in your cart</span>
            <p>Your favourite items are just click away</p>
     </div>
     <div className="cart-footer">
     <Custombutton>Start Shopping</Custombutton>
     </div>
     
    </div>
    
    </>)



}
const mapDispatchtoProps=dispatch=>({
    CartToggleAction:()=> dispatch(CartToggleAction())
  })
export default connect(null,mapDispatchtoProps)(Cart)