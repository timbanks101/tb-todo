<template>
  <div class="todo-item panel">
    <div class="todo-header panel-heading">
      <h3>{{ toDoItem.title }}</h3>
      <h4>{{ toDoItem.project }}</h4>
    </div>
    <div class="todo-detail panel-block">
      <p>{{ toDoItem.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["toDoItem", "priorities"],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    completeToDo(toDoItem) {
      // Mark this to do as done.
      this.$emit("completeToDo", toDoItem);
    },
    deleteToDo(toDoItem) {
      // Delete this to do.
      this.$emit("deleteToDo", toDoItem);
    },
    showFrom() {
      this.isEditing = true;
    },
    hideForm(toDoItem) {
      this.isEditing = false;
      this.$emit("editToDo", toDoItem);
    }
  }
};
</script>

<style scoped></style>
