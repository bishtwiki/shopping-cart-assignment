import React from "react"
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import './cart-icon.scss'
import { CartToggleAction} from '../../Redux/cart/cart.action';
import { connect } from "react-redux";
const CartIcon =({CartToggleAction})=>{
   
   return (<>
   <div className="cart-icon" onClick={CartToggleAction}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">0 item </span>
    </div>
   </>)
}

const mapDispatchtoProps=dispatch=>({
   CartToggleAction:()=> dispatch(CartToggleAction())
 })

export default connect(null,mapDispatchtoProps)(CartIcon)