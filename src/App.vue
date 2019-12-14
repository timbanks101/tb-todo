<template>
  <div id="app">
    <!-- header -->
    <header id="header" class="header">
      <to-do-manage :priorities="priorities"></to-do-manage>
    </header>
    <!-- /header -->

    <!-- listing -->
    <section class="listing">
      <to-do-list :toDoItems="toDoItems" :priorities="priorities"></to-do-list>
    </section>
    <!-- /listing -->
  </div>
</template>

<script>
import toDoList from "./components/ToDoList.vue";
import toDoManage from "./components/ToDoManage.vue";

export default {
  name: "app",
  data() {
    return {
      demoToDos: [
        {
          title: "One to get you started",
          group: "Project A",
          description: "Add details to help you remember what you need to do.",
          priority: "",
          done: false
        }
      ],
      toDoItems: [],
      priorities: [
        { id: 1, name: "High" },
        { id: 2, name: "Medium" },
        { id: 3, name: "Low" }
      ]
    };
  },
  components: {
    "to-do-list": toDoList,
    "to-do-manage": toDoManage
  },
  mounted() {
    // Add the demo to do's on mount.
    this.toDoItems = this.demoToDos;
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.listing {
  max-width: 860px;
  margin: 0 auto;
  display: block;
  position: relative;
}

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
