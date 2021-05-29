import Toast from './toast.vue';


const obj ={}

obj.install =function(Vue){
  // 创建组件构造器
  const toastConstrutor = Vue.extend(Toast)
  //new一个组件对象
  const toast = new toastConstrutor()
  //将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement('div'))
  //
  // console.log(toast.$el)
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj