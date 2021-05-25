import {ADD_COUNT,
        ADD_TO_CART, }
        from "./mutation-types";

export default {
  addCart({state,commit},payload){
    let temp = 0
    if(state.cartList.some((value,index,arr)=>{//find方法也行
      temp = index
      return value.iid===payload.iid})){
        commit(ADD_COUNT,temp)
      }else{
        commit(ADD_TO_CART,payload)
    }
  } 
}