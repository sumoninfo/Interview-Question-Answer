<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="isComponentLoaded =! isComponentLoaded">CLick</button>
    <TodoComponent v-if="isComponentLoaded"/>
  </div>
</template>
<script>
import TodoComponent from "@/views/Todo";

export default {
  name      : 'Lifecycle',
  components: {TodoComponent},
  data      : () => ({
    isComponentLoaded: true
  }),
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created")
  },
  beforeMount() {
    console.log("beforeMount")
  },
  mounted() {
    console.log("mounted")
  },
  beforeUpdate() {
    console.log("beforeUpdate")
  },
  updated() {
    console.log("updated")
  },
}
</script>

