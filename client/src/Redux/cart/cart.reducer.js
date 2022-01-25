import { CartActionType } from "./cart.type";
import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: false,
  cartItems: [],



};

const cartReducer = (state = INITIAL_STATE, action) => {


  switch (action.type) {

    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionType.ADD_ITEM:

      const id = action.payload.item.id;


      const isOld = state.cartItems.map((item) => item.id).includes(id);

      let cartItemslist = null;


      if (isOld) {
        const items = state.cartItems.map((item) => {

          if (item.id === id) {


            return {
              ...item,
              quantity: item.quantity + 1

            };
          }

          return item
        });

        cartItemslist = [...items];

      } else {
        cartItemslist = [...state.cartItems, action.payload.item];
      }

      return {
        ...state,
        cartItems: cartItemslist

      }

    case CartActionType.REMOVE_ITEM:
      const removeid = action.payload.item.id;
      const existing = state.cartItems.map((item) => item.id).includes(removeid);

      let removeitem = null;


      if (existing) {
        const items = state.cartItems.map((item) => {

          if (item.id === removeid) {


            return {
              ...item,
              quantity: item.quantity - 1

            };
          }

          return item
        });

        removeitem = [...items];

      } else {
        removeitem = [...state.cartItems, action.payload.item];
      }


      return {
        ...state,
        cartItems: removeitem
      }

    case CartActionType.CLEAR_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }


    default:
      return state;
  }
};

export default cartReducer;

