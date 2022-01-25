
  
  export const removeItemFromCart = (state,action) => {
    const id = action.payload.item.id;
      
     
      const isOld = state.cartItems.map((item) => item.id).includes(id);
      
      let cartItemslist = null;
      
      
      if (isOld) {
        const items = state.cartItems.map((item) => {

          if (item.id === id) {
           
           
            return {
              ...item,
              quantity: item.quantity - 1
              
            };
          }
        
          return item
        });
        
        return [...items];
       
      } else {
return [...state.cartItems, action.payload.item];
      }
    }
 