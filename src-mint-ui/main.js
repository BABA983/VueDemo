/*
  入口js：创建vue实例
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'

//注册成标签（全局）
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
