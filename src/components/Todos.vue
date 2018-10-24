<template>
  <div class="container">
    <h2>Todo List</h2>
    <div class="element" v-for="(todo, index) in todos" :key="todo.id">
      <div class="todo" :class="{ isCompleted: todo.completed }" @click="svitch(index)">
          <p class="item">
            {{ todo.text }} {{ todo.id }}
          </p>
      </div>
      <div @click="remove(index)" class="todo-deleter">🗑</div>
    </div>
    <p>
      <input @keyup.enter="add(newTodo)" v-model="newTodo" type="text"><button @click="add()">Add</button>
      <button @click="deleteAll()">Delete All</button>
      <button @click="markAll()">Green All</button>
      <button @click="reset()">Red All</button>
    </p>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        newTodo: ""
      }
    },
    computed: {
      todos() {
        return this.$store.getters.todos 
      }
    },
    methods: {
      add(){
        this.$store.dispatch("add", this.newTodo)
        this.newTodo = ""
      },
      remove(index){
        this.$store.dispatch("remove", index)
      },
      reset(){
        this.$store.dispatch("reset")
      },
      deleteAll(){
        this.$store.dispatch("deleteAll")
      },
      markAll(){
        this.$store.dispatch("markAll")
      },
      svitch(index){
        this.$store.dispatch("svitch", index)
      }
    }
  }
</script>

<style scoped>
  .todo { 
  display: inline-block;
  width: 300px;
  height: 100px;
  background-color: rgb(189, 157, 162);
  vertical-align: top;
  } .todo.isCompleted {
    background-color: lightgreen
  }

  .container {
    width: 500px;
    margin: 0 auto;
  }

  .todo-deleter{
    user-select: none;
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: rgb(255, 216, 215);
    color: rgb(236, 51, 51);
    vertical-align: top;
    font-size: 70px;
    text-align: center;
  }

  .element {
    display: block;
    width: 410px;
    margin: 10px auto;
  }

  .item {
    position: relative;
    left: 10px;
  }
</style>
