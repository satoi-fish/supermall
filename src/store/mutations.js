import {ADD_COUNT,
        ADD_TO_CART, }
        from "./mutation-types";



export default  {
  [ADD_COUNT](state,payload){
    state.cartList[payload].count += 1
  },
  [ADD_TO_CART](state,payload){
    payload.checked = false
    state.cartList.push(payload)
  }
}