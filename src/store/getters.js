export default{
  cartLength (state) {
    return state.cartList.length
  },
  cartChoosenLength(state){
    return state.cartList.filter(item=>item.checked).length
  },
  cartList (state) {
    return state.cartList
  }
}