<template>
  <div class="listing">
    <section class="fixed fixed-top">
      <div class="add-items">
        <!-- Set item text -->
        <input
          class="add-todo"
          autocomplete="off"
          placeholder="Type your to do"
          v-model="newTodo"
          @keyup.enter="addTodo"
        />

        <!-- Set item priority -->
        <b-field class="add-priority">
          <b-select title="Set priority" v-model="newTodoPriority" rounded>
            <option
              v-for="option in priorities"
              :value="option"
              :key="option.id"
            >
              {{ option.name }}
            </option>
          </b-select>
        </b-field>

        <button
          class="add-todo-button"
          @click="addTodo"
          title="Add this to do"
          :class="{ disabled: newTodo.length === 0 }"
          :disabled="newTodo.length === 0"
        >
          <b-icon icon="plus"></b-icon>
        </button>
      </div>
    </section>

    <section class="to-dos is-centered" v-show="todos.length" v-cloak>
      <div class="actions">
        <b-button
          @click="completeAll"
          outlined
          class="is-left"
          title="Complete all"
        >
          <b-icon icon="check-all" size="is-small"></b-icon>
          <span>Complete all</span>
        </b-button>

        <b-button
          @click="deleteAll"
          outlined
          class="is-right"
          title="Deleted all"
        >
          <b-icon icon="nuke" size="is-small"></b-icon>
          <span>Delete all</span>
        </b-button>
      </div>
      <transition-group
        name="fade"
        appear
        tag="DIV"
        :style="{ '--total': sortedTodos.length }"
      >
        <to-do-items
          v-for="(todoItem, i) in sortedTodos"
          :todoItem="todoItem"
          :key="todoItem.id"
          @toggleTodo="onToggleTodo"
          @deleteTodo="onDeleteTodo"
          :style="{ '--i': i }"
        />
      </transition-group>
    </section>
  </div>
</template>

<script>
import todoItem from "./ToDoItem.vue";

export default {
  name: "todoList",
  components: {
    "to-do-items": todoItem
  },
  data() {
    return {
      demoTodos: [
        {
          id: 1,
          title:
            "List todo items in readable manner (grid, list, etc...) with the appropriate priority displayed",
          priority: { id: 1, name: "High" },
          done: false
        },
        {
          id: 2,
          title: "Add a new item to the list with priority",
          priority: { id: 1, name: "High" },
          done: false
        },
        {
          id: 3,
          title: "Remove an item from the list",
          priority: { id: 1, name: "High" },
          done: false
        },
        {
          id: 4,
          title: "Clear the entire list",
          priority: { id: 1, name: "High" },
          done: false
        },
        {
          id: 5,
          title: "Save to local storage and reload when entering the page",
          priority: { id: 2, name: "Medium" },
          done: false
        },
        {
          id: 6,
          title: "Sorting by priority",
          priority: { id: 2, name: "Medium" },
          done: false
        },
        {
          id: 7,
          title: "List animations",
          priority: { id: 3, name: "Low" },
          done: false
        },
        {
          id: 8,
          title: "Complete all",
          priority: { id: 3, name: "Low" },
          done: false
        }
      ],
      todos: [],
      newTodo: "",
      newTodoPriority: { id: 3, name: "Low" },
      sorting: -1,
      priorities: [
        { id: 1, name: "High" },
        { id: 2, name: "Medium" },
        { id: 3, name: "Low" }
      ]
    };
  },
  mounted() {
    if (localStorage.getItem("todos")) {
      // If the local storage data is ok, use it.
      this.todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      this.todos = this.demoTodos;
      this.saveTodos();
    }
  },
  computed: {
    sortedTodos() {
      return this.todos
        .slice(0)
        .sort((a, b) =>
          a.priority.id < b.priority.id ? this.sorting : -this.sorting
        );
    }
  },
  methods: {
    addTodo() {
      // Make sure something was typed.
      if (!this.newTodo.length > 0) {
        return;
      }
      // Get the highest number id to iterate on it.
      const highestId = Math.max.apply(
        Math,
        this.todos.map(item => item.id)
      );
      // Add a new to do item.
      this.todos.push({
        id: highestId + 1,
        title: this.newTodo,
        priority: this.newTodoPriority,
        done: false
      });
      this.newTodo = "";
      this.newTodoPriority = { id: 3, name: "Low" };
      this.saveTodos();
    },
    onToggleTodo(todo, todoState) {
      // Find in the array and remove.
      const todoId = this.todos.indexOf(todo);
      // Find the matching to do and update its done value.
      this.todos[todoId].done = todoState;
      this.saveTodos();
    },
    onDeleteTodo(todo) {
      // Find in the array and remove.
      const item = this.todos.indexOf(todo);
      // On the deletetion of a to do item.
      this.todos.splice(item, 1);
      this.saveTodos();
    },
    completeAll() {
      // Mark all to dos as complete.
      // Speard operators still feel like black magic.
      const completeToDos = this.todos.map(o => ({ ...o, done: true }));
      this.todos = completeToDos;
      this.saveTodos();
    },
    deleteAll() {
      // Deletion of all to do items.
      this.$buefy.dialog.confirm({
        title: `Deleting todos`,
        confirmText: "Delete all to do items",
        type: "is-danger",
        hasIcon: true,
        message: `Are you sure you want to delete all the todos on your list? This cannot be undone.`,
        onConfirm: () => {
          this.todos = [];
          this.saveTodos();
        }
      });
    },
    saveTodos() {
      // Save to dos in local storage.
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem("todos", parsed);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/custom.scss";

.to-dos {
  max-width: 720px;
  margin: 60px auto;
  display: block;
  position: relative;
}

.fixed {
  display: block;
  position: fixed;
  width: 100%;
  background: $light;
  min-height: 60px;
  z-index: 5;
  &-top {
    top: 0;
  }
}

.add-items,
.options {
  text-align: center;
  max-width: 720px;
  margin: 0px auto;
  padding: 3px 0;
  display: block;
  position: relative;
}

.add-items {
  &:after {
    position: absolute;
    content: "";
    display: block;
    left: 0px;
    right: 0px;
    height: 2px;
    background: $dark;
    bottom: 2px;
  }
}

.add-todo {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  border: 0;
  padding: 12px 160px 12px 12px;
  background: $light;
  transition: all 0.2s linear;

  &:focus {
    background: darken($light, 10%);
    transition: all 0.2s linear;
  }
}

.add-priority {
  position: absolute;
  right: 50px;
  top: 10px;
}

.add-todo-button {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  right: 10px;
  top: 10px;
  border-radius: 50px;
  border: 2px solid;
  border-color: #dbdbdb;
  background: $white;
  color: $primary;
  transition: all 0.4s ease;

  &.disabled {
    color: $grey;

    &:hover {
      cursor: not-allowed;
    }
  }

  &:not(.disabled) {
    &:hover {
      transition: all 0.4s ease;
      color: $white;
      background: $primary;
      transform: scale(1.2);
      cursor: pointer;
    }
    &:focus {
      box-shadow: 0 0 0 0.125em rgba(0, 153, 0, 0.25);
    }
  }
}

.actions {
  background: $light;
  padding: 8px 0;

  button {
    padding: 2px 12px;
    margin: 0 10px;
    transition: all 0.3s linear;

    &:hover {
      color: $primary;
      transition: all 0.3s linear;
    }
  }
}
</style>
