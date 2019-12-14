<template>
  <div class="columns is-mobile">
    <div class="to-do-list column">
      <to-do-items
        v-for="(toDoItem, i) in toDoItems"
        :toDoItem="toDoItem"
        :key="i"
        :priorities="priorities"
      />
    </div>
  </div>
</template>

<script>
import toDoItem from "./ToDoItem.vue";

export default {
  name: "ToDoList",
  props: ["toDoItems", "priorities"],
  components: {
    "to-do-items": toDoItem
  },
  methods: {
    onAddToDo() {
      // On addition of a new to do item.
    },
    onEditToDo() {
      // On edit of a to do item.
    },
    onDeleteToDo() {
      // On the deletetion of a to do item.
    },
    onDeleteAllToDos() {
      // On deletetion of all to do items.
    }
  }
};
</script>

<style scoped></style>
