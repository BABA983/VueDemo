<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<TodoHeader @addTodo="addTodo"></TodoHeader>--> <!--给ToDoHeader标签对象绑定addTodo事件监听-->
      <TodoHeader ref="header"/>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"
                  :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
  import PubSub from '/node_modules/pubsub-js'

  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'

  export default {
    data() {
      return {
        //从localStorage读取todos
        todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')    //k-v
      }
    },
    mounted () { //执行异步代码
      //给<ToDoHeader/>绑定addTodo事件监听
//      this.$on('addTodo', this.addTodo) //这样写是给App组件绑定监听
      this.$refs.header.$on('addTodo', this.addTodo) //绑定ref为header的组件



    },
    watch: { //监视
      todos: {
        deep: true, //深度
        handler: function (value) {
          //将todos最新的值保存到localStorage
          window.localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      //删除所有选中
      deleteCompleteTodos() {
        /**
         * var sum = (num1, num2) => num1 + num2;
         *
         * var sum = function(num1, num2) {
            return num1 + num2;
          };
         */
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      //全选或全不选
      selectAllTodos(check) {
        this.todos.forEach(todo => todo.complete = check)
      }
    },
    components: {
      TodoHeader,
      TodoList,
      TodoFooter
    }
  }
</script>

<style>
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(225, 225, 225, 0.2), 0 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }

  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
