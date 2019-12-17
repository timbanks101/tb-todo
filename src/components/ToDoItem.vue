<template>
  <div class="todo-item" :class="{ done: todoItem.done }">
    <div class="item" :class="todoItem.priority.name.toLowerCase()">
      <input
        class="toggle"
        type="checkbox"
        @click="toggleTodo"
        v-model="todoItem.done"
      />
      <label class="todo-title">
        {{ todoItem.title }}
        <br />
        <small
          class="priority-label is-size-7"
          :class="todoItem.priority.name.toLowerCase()"
        >
          {{ todoItem.priority.name }}
        </small>
      </label>
      <button
        class="remove-todo-button"
        @click="deleteTodo"
        title="Add this to do"
      >
        <b-icon icon="close"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoItem",
  props: ["todoItem"],
  methods: {
    toggleTodo() {
      // Handle checkbox boolean weirdness.
      const todoSate = this.todoItem.done === false ? true : false;
      // Toggle event.
      this.$emit("toggleTodo", this.todoItem, todoSate);
    },
    deleteTodo() {
      // Delete event.
      this.$emit("deleteTodo", this.todoItem);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/custom.scss";

.todo-item {
  text-align: left;
  padding: 0px;
  border-bottom: 2px solid $light;

  .item {
    display: block;
    overflow: hidden;
    position: relative;

    &:before {
      content: "\F130";
      font: normal normal normal 24px/1 "Material Design Icons";
      text-rendering: auto;
      position: absolute;
      top: 22px;
      left: 15px;
      font-size: 28px;
      color: $dark;
    }

    .todo-title {
      word-break: break-word;
      padding: 12px 60px;
      display: block;
      line-height: 1.2;
      font-size: 20px;
      transition: color 0.4s;

      .priority-label {
        display: inline-block;
        border-radius: 5px;
        padding: 2px 4px;
        color: $white;
        font-weight: bold;

        &.high {
          background: $danger;
        }

        &.medium {
          background: $warning;
        }

        &.low {
          background: $info;
        }
      }
    }

    .toggle {
      text-align: center;
      width: 40px;
      height: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto 0;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      &:hover {
        cursor: pointer;
      }
    }

    .remove-todo-button {
      position: absolute;
      display: block;
      right: 15px;
      top: 20px;
      border-radius: 50px;
      border: 2px solid;
      border-color: $black;
      color: $black;
      transition: all 0.2s ease;

      @include from($desktop) {
        opacity: 0;
      }

      &:hover {
        cursor: pointer;
        border-color: $danger;
        color: $danger;
        transform: scale(1.1);
        transition: all 0.2s ease;
      }
    }

    &:hover {
      background: $light;
      transition: all 0.2s ease;

      .remove-todo-button {
        opacity: 1;
        transition: all 0.2s ease;
      }
    }
  }

  &.done {
    text-decoration: line-through;

    .todo-title {
      color: $grey-light;
      transition: all 0.2s ease;
    }

    .item:before {
      content: "\F134";
    }
  }
}
</style>
