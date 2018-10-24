<template>
  <div id="app">
    <div class="container">
      <todos></todos>
    </div>
  </div>
</template>

<script>
  import Todos from  "./components/Todos.vue";

  export default {
    name: 'app',
    components:{
      todos: Todos
    }
  }
</script>

<style lang="scss">
  * {
      box-sizing: border-box;
  }
</style>