<template>
  <div></div>
</template>

<script>
export default {
  name: "ToDoAdd",
  props: ["priorities"],
  methods: {
    addToDo() {
      // Add a new to do item.
    },
    deleteAllToDos() {
      // Deletetion of all to do items.
      this.$buefy.dialog.confirm({
        title: `Deleting Todos`,
        confirmText: "Delete all to do items",
        type: "is-danger",
        hasIcon: true,
        message: `Are you sure you want to delete all the todos on your list? This cannot be undone.`,
        onConfirm: () => {
          this.$emit("delete-all");
        }
      });
    }
  }
};
</script>

<style scoped></style>
