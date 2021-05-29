import {ADD_COUNT,
        ADD_TO_CART, }
        from "./mutation-types";

export default {
  addCart({state,commit},payload){
    return new Promise((resolve,reject)=>{
      let temp = 0
      
    if(state.cartList.some((value,index,arr)=>{//find方法也行
      temp = index
      return value.iid===payload.iid})){
        commit(ADD_COUNT,temp)
        resolve('商品已存在购物车，当前数量+1')
      }else{
        commit(ADD_TO_CART,payload)
        resolve('商品放入了购物车')
      }
    })
  } 
}