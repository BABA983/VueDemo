<template>
  <!--

  -->
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)" :style="{background: bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete">
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
    export default {
      data () {
        return {
          isShow: false, //默认不显示按钮
          bgColor: 'white' //背景颜色默认
        }
      },
      props: {
        todo:{
          type: Object
        },
        index: {
          type: Number
        },
        deleteTodo: {
          type: Function
        }
      },
      methods: {
        handleEnter (isEnter) {
          //console.log(isEnter)
          if(isEnter){
            this.isShow=true
            this.bgColor='#aaaaaa'
          }else{
            this.isShow=false
            this.bgColor='white'
          }
        },
        deleteItem (index) {
          const {todo} = this
          if(window.confirm('确认删除${todo.title}吗')){
            this.deleteTodo(index)
            //PubSub.publish('deleteTodo', index)
          }
        }
      }
    }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }
  li label {
    float: left;
    cursor: pointer;
  }
  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  li:last-child {
    border-bottom: none;
  }
</style>
