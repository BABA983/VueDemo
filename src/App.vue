<template>
  <div class="todo-container">
    <div  class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos"
                  :selectAllTodos="selectAllTodos"></TodoFooter>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
    export default {
    data () {
      return {
        todos: [
          {title:'eat breakfast',complete:false},
          {title:'study',complete:false},
          {title:'entertainment',complete:false}
        ]
      }
    },
    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },
      //删除所有选中
      deleteCompleteTodos () {
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
      selectAllTodos (check) {
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
    box-shadow: inset 0 1px 0 rgba(225, 225, 225, 0.2), 0 1px 2px rgba(0, 0, 0,0.15);
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
