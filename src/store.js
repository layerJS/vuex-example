import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [{id: 1, text: "Wash dishes", completed: true},
            {id: 2, text: "Buy grocieries", completed: false}],
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  },
  mutations: {
    add(state, todo){
      state.todos.push({
        id: state.todos.length+1,
        text: todo,
        completed: false});
    },
    svitch(state, index){
      let todo = state.todos[index]
      todo.completed = !todo.completed
    },
    remove(state, index){
      state.todos.splice(index, 1);
    },
    reset(state){
      for (todo of state.todos){
        todo.completed = false;
      }
    },
    deleteAll(state){
      state.todos = [];
    },
    markAll(state){
      for (todo of state.todos){
        todo.completed = true;
      }
    }
  },
  actions: {
    add(context, todo) {
      context.commit("add", todo);
    },
    svitch(context, index){
      context.commit("svitch", index);
    },
    remove(context, index){
      context.commit("remove", index);
    },
    reset(context){
      context.commit("reset");
    },
    deleteAll(context){
      context.commit("deleteAll");
    },
    markAll(context){
      context.commit("markAll");
    }
    
  }
});