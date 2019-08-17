/*
  入口js：创建vue实例
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


new Vue({ //配置对象的属性名都是一些确定的名称，不能随便修改
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
