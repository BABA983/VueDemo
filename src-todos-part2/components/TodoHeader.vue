<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem"
           v-model="title">
  </div>
</template>

<script>
    export default {
      data () {
        return {
          title: ''
        }
      },
      props: {

      },
      methods: {
        addItem () {
          //1、检查输入合法性
          const title = this.title.trim()
          if(!title){
            alert('文本框输入的内容不能为空')
            return
          }
          //2、根据输入生成一个todo对象
          const todo = {
            title,
            complete: false
          }
          //3、添加到todos
          //this.addTodo(todo)
          //触发自定义事件：addTodo
          this.$emit('addTodo', this.todo)
          //4、清除输入框内容
          this.title=''
        }
      }
    }
</script>

<style>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }
  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.75), 0 0 8px rgba(82, 168, 236, 0.5);
  }
</style>
