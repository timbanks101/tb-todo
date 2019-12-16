<template>
  <div id="app" v-cloak>
    <to-do-list></to-do-list>
  </div>
</template>

<script>
import todoList from "./components/ToDoList.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "to-do-list": todoList
  }
};
</script>

<style lang="scss">
@import "./scss/custom.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
