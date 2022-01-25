import { CartActionType } from './cart.type'

export const CartToggleAction = () => ({
   type: CartActionType.TOGGLE_CART_HIDDEN,
})



export const Additem = (item) => (
   {
      type: CartActionType.ADD_ITEM,
      payload: item,
   }
)

export const Removeitem = (item) => (
   {
      type: CartActionType.REMOVE_ITEM,
      payload: item,
   }
)
export const ClearCart = (item) => (
   {
      type: CartActionType.CLEAR_CART,
      payload: item,
   }
)

